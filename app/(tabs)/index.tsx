import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Animated, // Tambahkan Animated
  Easing, // Tambahkan Easing untuk efek halus
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const moveAnimation = useRef(new Animated.Value(0)).current; // Inisialisasi animasi

  const startAnimation = () => {
    Animated.timing(moveAnimation, {
      toValue: 300, // Posisi akhir animasi
      duration: 1500, // Durasi animasi (ms)
      easing: Easing.bounce, // Efek animasi
      useNativeDriver: true, // Untuk performa lebih baik
    }).start(() => {
      // Kembalikan ke posisi awal setelah selesai
      Animated.timing(moveAnimation, {
        toValue: 0,
        duration: 1500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    });
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login ke Travelin</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (username === "Alfi" && password === "alfi") {
              setIsLoggedIn(true);
              Alert.alert("Login Berhasil", "Selamat datang di aplikasi Travelin!");
            } else {
              Alert.alert("Login Gagal", "Username atau password salah. Coba lagi.");
            }
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to Travelin</Text>
      </View>

      {/* Tambahkan Animasi */}
      <View style={styles.animationContainer}>
        <Animated.View
          style={[
            styles.movingBox,
            { transform: [{ translateX: moveAnimation }] },
          ]}
        />
        <TouchableOpacity
          style={styles.startAnimationButton}
          onPress={startAnimation}
        >
          <Text style={styles.startAnimationText}>Mulai Animasi</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://hariannusantara.com/wp-content/uploads/2019/06/gambar-pemandangan-pegunungan4.jpg",
          }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: responsiveWidth(5),
  },
  loginTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    marginBottom: responsiveHeight(3),
  },
  input: {
    width: "100%",
    height: responsiveHeight(6),
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: responsiveHeight(2),
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#007bff",
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(5),
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2),
    textAlign: "center",
  },
  header: {
    backgroundColor: "#007bff",
    paddingVertical: responsiveHeight(2),
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
  },
  animationContainer: {
    marginVertical: responsiveHeight(2),
    alignItems: "center",
    justifyContent: "center",
  },
  movingBox: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    backgroundColor: "red",
    borderRadius: 10,
    marginBottom: responsiveHeight(2),
  },
  startAnimationButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  startAnimationText: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
  },
  banner: {
    marginVertical: responsiveHeight(2),
    alignItems: "center",
  },
  bannerImage: {
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    borderRadius: 10,
  },
});

export default App;
