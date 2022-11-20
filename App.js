import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import BottomNavigator from './routes/BottomNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import globalStyles from './assets/styles/globalStyles';

export default function App() {
  return (
    // <View style={globalStyles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaProvider>
      <BottomNavigator />
    </SafeAreaProvider>
  );
}