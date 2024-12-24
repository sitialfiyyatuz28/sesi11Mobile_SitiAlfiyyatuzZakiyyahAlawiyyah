// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/LoginPage'; // pastikan jalur file benar
import HomePage from './components/HomePage';   // pastikan jalur file benar

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {() => <LoginPage onLoginSuccess={handleLoginSuccess} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Home" component={HomePage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
