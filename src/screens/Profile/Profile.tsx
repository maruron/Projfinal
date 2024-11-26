import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const { user, signOut } = useAuth();

  return (
    <View>
      <Text>Bem-vindo, {user?.name}!</Text>
      <Button title="Editar Perfil" onPress={() => {/* Navegar para tela de edição */}} />
      <Button title="Logout" onPress={signOut} color="red" />
    </View>
  );
}