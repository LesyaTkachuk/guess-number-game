import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

function PrimaryButton({ title, onPress, style }) {
  function pressHandler() {}

  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) => ({
          ...(pressed && styles.pressed),
          ...styles.buttonInnerContainer,
        })}
        onPress={onPress}
        android_ripple={{ color: COLORS.primary600 }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    // flex: 1,
    width: "50%",
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.primary500,

    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    margin: 4,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
