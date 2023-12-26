import { useMemo, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MIN, MAX, DIRECTION } from "../constants";
import { generateRandomBetween } from "../utils/generateRandomBetween";

import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { COLORS } from "../constants/colors";
import GuessLogItem from "../components/game/GuessLogItem";

function GameScreen({ userNumber, onGameOver }) {
  const [minBoundary, setMinBoundary] = useState(MIN);
  const [maxBoundary, setMaxBoundary] = useState(MAX);

  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, userNumber);
  }, []);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);

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
      setGuesses((prevState) => [...prevState, newGuessNumber]);
    } else {
      setMinBoundary(currentGuess);
      const newGuessNumber = generateRandomBetween(
        currentGuess,
        maxBoundary,
        0
      );
      setCurrentGuess(newGuessNumber);
      setGuesses((prevState) => [newGuessNumber, ...prevState]);
    }
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guesses.length);
    }
  }, [userNumber, currentGuess, guesses]);

  return (
    <View style={styles.screen}>
      <Title title="Oponent's guess" />

      <NumberContainer number={currentGuess} />

      <Card>
        <InstructionText text="Higher or lower" />
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            // title={DIRECTION.LOWER}
            onPress={() => nextGuessHandler(DIRECTION.LOWER)}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton
            // title={DIRECTION.HEIGER}
            onPress={() => nextGuessHandler(DIRECTION.HEIGER)}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={guesses}
          renderItem={({ item, index }) => (
            <GuessLogItem roundNumber={guesses.length - index} guess={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: "center",
  },
  buttonsContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    paddingHorizontal: 16,
  },

  listContainer: {
    flex: 1,
    paddingVertical: 16,
  },
});

export default GameScreen;
