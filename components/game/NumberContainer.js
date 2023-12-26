import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

function NumberContainer({ number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    // width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.accent500,
    fontSize: 50,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
