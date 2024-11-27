import { StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";  
import Logo from "@/src/Logo";
import { Button } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  const [size] = useState(300);

  
  return (
    <LinearGradient
      colors={['#091A3F', '#054DEB']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.screen}>
        <Logo size={size} />
        <Button
          mode="contained"
          onPress={() => router.push('/login')}
          buttonColor="#FCB316"
          style={styles.button}
        >
          Get Started
        </Button>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  screen: {
    marginTop: 190,
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,  
    justifyContent: 'center',
    width: 375,
    height: 60
  },
  linkWrapper: {
    marginVertical: 10,
  }
});
