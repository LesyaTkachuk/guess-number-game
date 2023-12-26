import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { COLORS } from "./constants/colors";

export default function App() {
  // we will use simple navigation by changing the rendering content
  const [userNumber, setUserNumber] = useState(null);
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function pickNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler(rounds) {
    setRoundsNumber(rounds);
    setIsGameOver(true);
  }

  function restartGameHandler() {
    setUserNumber(null);
    setIsGameOver(false);
    setRoundsNumber(0);
  }

  let screen = <StartGameScreen onPickNumber={pickNumber} />;

  if (!fontLoaded) {
    return <AppLoading />;
  }

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light"/>
      <LinearGradient
        colors={[COLORS.primary700, COLORS.accent500]}
        style={styles.appContainer}
      >
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.15 }}
          style={styles.appContainer}
        >
          <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "#ddb527",
  },
});
