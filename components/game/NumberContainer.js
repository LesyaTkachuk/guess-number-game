import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

function NumberContainer({ number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.accent500,
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default NumberContainer;
