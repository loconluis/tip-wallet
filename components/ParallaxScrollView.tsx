import type { PropsWithChildren } from "react";
import { StyleSheet, useColorScheme, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{}>;

export default function ParallaxScrollView({ children }: Props) {
  // const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <SafeAreaView style={styles.header}>
          <View style={styles.tag}>
            <View style={styles.avatar}></View>
            <Text style={styles.tagname}>Luis Locon</Text>
          </View>
          <Text>
            <Ionicons size={25} name="scan-outline" />
          </Text>
        </SafeAreaView>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    overflow: "hidden",
  },
  tag: {
    flex: 1,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  tagname: {
    fontWeight: "700",
    paddingLeft: 5,
    fontSize: 25,
    verticalAlign: "middle",
  },
  tagScan: {},
  avatar: {
    borderRadius: 50,
    height: 35,
    width: 35,
    backgroundColor: "#eee",
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    gap: 20,
    overflow: "hidden",
  },
});
