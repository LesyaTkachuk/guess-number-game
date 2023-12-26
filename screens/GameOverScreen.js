import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import { COLORS } from "../constants/colors";

function GameOverScreen({ userNumber, roundsNumber, onRestart }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 180;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Title title="Game over!" />
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess
          the number <Text style={styles.hightlight}>{userNumber}</Text>.
        </Text>

        <PrimaryButton
          style={styles.button}
          title={"Start new game"}
          onPress={onRestart}
        />
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: { marginVertical: 20, alignSelf: "center", width: "70%" },
  imageContainer: {
    borderWidth: 3,
    borderColor: COLORS.primary800,
    // borderRadius: (deviceWidth * 0.6) / 2,

    // width: deviceWidth * 0.6,
    // height: deviceWidth * 0.6,
    margin: 32,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary700,
  },
});

export default GameOverScreen;
