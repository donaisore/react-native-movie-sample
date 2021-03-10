import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserContext } from 'src/contexts/userContext';
import AppNavigator from 'src/navigation/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { User } from 'src/types/user';
import { LogBox } from 'react-native';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  LogBox.ignoreLogs(['Setting a timer']);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SafeAreaProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </SafeAreaProvider>
    </UserContext.Provider>
  );
}
