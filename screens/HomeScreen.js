import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, color: "#007AFF" }}>Bienvenue 🏡</Text>
        <Text>🏠 Écran d'accueil</Text>

      <Button
        title="Aller aux détails"
        onPress={() => navigation.navigate("Details", { id: 42 })}
      />
    </View>
  );
}
