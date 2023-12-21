import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

function InstructionText({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: COLORS.accent500,
    textAlign: "center",
  },
});

export default InstructionText;
