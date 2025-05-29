import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          animation: 'fade',
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'ShopScan Rewards',
          }}
        />
        <Stack.Screen
          name="screens/ScannerScreen"
          options={{
            title: 'Scan Products',
          }}
        />
        <Stack.Screen
          name="screens/MapScreen"
          options={{
            title: 'Store Locator',
          }}
        />
        <Stack.Screen
          name="screens/ProfileScreen"
          options={{
            title: 'My Rewards',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
