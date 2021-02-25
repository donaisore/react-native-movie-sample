import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserContext } from 'src/contexts/userContext';
import AppNavigator from 'src/navigation/AppNavigator';
import { User } from 'src/types/user';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </UserContext.Provider>
  );
}
