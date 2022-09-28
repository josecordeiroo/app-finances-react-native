import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "../../components/Header";
import { Balance } from "../../components/Balance";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Zeca Cordeiro" />
      <Balance/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
