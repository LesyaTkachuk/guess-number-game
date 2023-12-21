import { useMemo, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { MIN, MAX, DIRECTION } from "../constants";
import { generateRandomBetween } from "../utils/generateRandomBetween";

import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { COLORS } from "../constants/colors";

function GameScreen({ userNumber, onGameOver }) {
  const [minBoundary, setMinBoundary] = useState(MIN);
  const [maxBoundary, setMaxBoundary] = useState(MAX);

  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, userNumber);
  }, []);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === DIRECTION.LOWER && currentGuess < userNumber) ||
      (direction === DIRECTION.HEIGER && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === DIRECTION.LOWER) {
      setMaxBoundary(currentGuess);
      const newGuessNumber = generateRandomBetween(
        minBoundary,
        currentGuess,
        0
      );
      setCurrentGuess(newGuessNumber);
    } else {
      setMinBoundary(currentGuess);
      const newGuessNumber = generateRandomBetween(
        currentGuess,
        maxBoundary,
        0
      );
      setCurrentGuess(newGuessNumber);
    }
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [userNumber, currentGuess]);

  return (
    <View style={styles.screen}>
      <Title title="Oponent's guess" />
      <Text>{currentGuess}</Text>
      <NumberContainer number={currentGuess} />
      <Card>
        <InstructionText text="Higher or lower" />
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title={DIRECTION.LOWER}
            onPress={() => nextGuessHandler(DIRECTION.LOWER)}
          />
          <PrimaryButton
            title={DIRECTION.HEIGER}
            onPress={() => nextGuessHandler(DIRECTION.HEIGER)}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  buttonsContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GameScreen;
