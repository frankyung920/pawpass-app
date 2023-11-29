import { Stack } from "expo-router";

export default function Travels() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="planNewTrip" options={{ headerShown: false }} />
    </Stack>
  );
}
