import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UVScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UV Index Details</Text>
      <Text style={styles.text}>Current UV Index: 5 (Moderate)</Text>
      <Text style={styles.text}>Recommendation: Wear sunscreen and limit sun exposure from 11am to 3pm.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginTop: 10, textAlign: 'center' },
});
