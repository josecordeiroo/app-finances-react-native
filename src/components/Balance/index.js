import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export const Balance = () => {
  return <View style={styles.container}>
    <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',

    }
})