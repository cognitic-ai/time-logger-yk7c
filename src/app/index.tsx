import { Pressable, ScrollView, Text } from "react-native";
import * as AC from "@bacons/apple-colors";

console.log("Hello from device");

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        padding: 16,
      }}
    >
      <Text style={{ color: AC.label }}>Hello world</Text>
      <Pressable
        onPress={() => {
          console.log(new Date().toLocaleTimeString());
        }}
        style={{
          marginTop: 16,
          backgroundColor: AC.systemBlue,
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 10,
          borderCurve: "continuous",
          alignSelf: "flex-start",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Log Time</Text>
      </Pressable>
    </ScrollView>
  );
}
