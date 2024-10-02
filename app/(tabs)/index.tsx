import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/Ionicons";

// import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <View style={styles.balanceBox}>
          <ThemedText style={styles.balanceText} type="title">
            GTQ 20,489.45
          </ThemedText>
        </View>
      </ThemedView>
      <ThemedView style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.actionButton}
          onPress={() => console.log("Send")}
          underlayColor={"#464646"}
        >
          <View>
            <Text style={styles.actionText}>
              <Ionicons size={15} name="arrow-up-outline" />
              Enviar
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.actionButton}
          onPress={() => console.log("Receive")}
          underlayColor={"#464646"}
        >
          <View>
            <Text style={styles.actionText}>
              <Ionicons size={15} name="arrow-down-outline" />
              Recibir
            </Text>
          </View>
        </TouchableHighlight>
      </ThemedView>
      <ThemedView
        style={{ height: 100, backgroundColor: "blue", borderRadius: 10 }}
      >
        {/* <Text>Banner</Text> */}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Transacciones</ThemedText>
        {/* <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText> */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  balanceBox: {
    flex: 1,
    backgroundColor: "#f6f3f3",
    borderRadius: 15,
    height: 150,
    justifyContent: "center",
  },
  balanceText: {
    padding: 5,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "700",
  },
  actionsContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    backgroundColor: "#000",
  },
  actionText: {
    gap: 4,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
