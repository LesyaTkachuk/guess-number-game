import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 8,
  },
});

export default Title;
