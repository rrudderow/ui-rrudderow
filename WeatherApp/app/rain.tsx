import { View, Text, StyleSheet } from 'react-native';

export default function RainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rain Chance</Text>
      <Text style={styles.text}>Chance of rain: 30%</Text>
      <Text style={styles.text}>Light showers expected in the afternoon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
});
