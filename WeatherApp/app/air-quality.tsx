import { View, Text, StyleSheet } from 'react-native';

export default function AirQualityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Air Quality</Text>
      <Text style={styles.text}>AQI: 42 (Good)</Text>
      <Text style={styles.text}>Air is clean and poses little or no risk.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
});
