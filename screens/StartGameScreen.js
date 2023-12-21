import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import { COLORS } from "../constants/colors";

import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be greater than 0 and less than 99",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }] // list of buttons
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  function resetHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.root}>
      <Title title="Guess a number" />
      <Card>
        <InstructionText text="Enter a number" />
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Reset" onPress={resetHandler} />
          <PrimaryButton title="Confirm" onPress={confirmInputHandler} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", marginTop: 100 },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: COLORS.accent500,
    color: COLORS.accent500,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default StartGameScreen;
