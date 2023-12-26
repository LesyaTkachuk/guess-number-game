import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    color: COLORS.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 8,
    maxWidth: "90%",
    width: 300,
  },
});

export default Title;
