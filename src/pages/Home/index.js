import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '390,22',
        date: '17/09/2022',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Pix cliente X',
        value: '150,00',
        date: '11/09/2022',
        type: 1 //receita / entradas
    },
    {
        id: 3,
        label: 'Salario',
        value: '14.000,00',
        date: '05/09/2022',
        type: 1 //receita / entradas
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Zeca Cordeiro" />
      <Balance saldo='7.293,33' gastos='- 927,92' />
      <Actions/>
      <Text style={styles.title}>Últimas movimentações:</Text>
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 20
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
