import { StyleSheet, Text, View } from "react-native";

export default function CreateRunScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Run</Text>
      <Text>Session creation coming soon.</Text>
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
