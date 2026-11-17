import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SideBySide</Text>
      <Text style={styles.subtitle}>Run your route. Share the experience.</Text>

      <Pressable style={styles.button} onPress={() => router.push("/create")}>
        <Text style={styles.buttonText}>Create a Run</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push("/join")}>
        <Text style={styles.buttonText}>Join a Run</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F7FAFC",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#16202A",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#465569",
    marginTop: 12,
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#1d56f2",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
