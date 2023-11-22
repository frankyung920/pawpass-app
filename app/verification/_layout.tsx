import { Stack } from "expo-router";

export default function VerifyDog() {
  return (
    <Stack>
      <Stack.Screen name="indexPage" options={{ headerShown: false }} />
      <Stack.Screen name="microChip" options={{ headerShown: false }} />
      <Stack.Screen name="[status]" options={{ headerShown: false }} />
      <Stack.Screen name="ownerIdIndexPage" options={{ headerShown: false }} />
      <Stack.Screen name="scanOwnerId" options={{ headerShown: false }} />
    </Stack>
  );
}
