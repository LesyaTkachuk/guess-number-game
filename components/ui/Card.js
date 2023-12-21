import { View, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    marginTop: 30,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: COLORS.primary800,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});

export default Card;
