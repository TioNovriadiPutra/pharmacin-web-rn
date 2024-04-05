import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuthController from "src/controllers/authController";

const Dashboard = () => {
  const { logout } = useAuthController();

  return (
    <View>
      <Pressable onPress={logout}>Dashboard</Pressable>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
