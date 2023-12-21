import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { COLORS } from "./constants/colors";

export default function App() {
  // we will use simple navigation by changing the rendering content
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver]=useState(false);

  function pickedNumberNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler(){
    setIsGameOver(true)
  }

  function restartGameHandler(){
    setUserNumber(null)
    setIsGameOver(false)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(isGameOver){
    screen=<GameOverScreen onRestart={restartGameHandler}/>
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "#ddb527",
  },
});
