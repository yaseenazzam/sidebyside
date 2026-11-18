import { StyleSheet, Text, View } from "react-native";

export default function JoinRunScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join a Run</Text>
      <Text>Session joining coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
});
