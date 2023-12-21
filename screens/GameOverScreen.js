import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ onRestart }) {
  return (
    <View style={styles.screen}>
      <Title title="Game over!" />

      <PrimaryButton
        style={styles.button}
        title={"Try again"}
        onPress={onRestart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  button: { marginVertical: 20, alignSelf: "center" },
});

export default GameOverScreen;
