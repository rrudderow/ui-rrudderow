import { View, Text, StyleSheet } from 'react-native';

export default function HumidityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Humidity</Text>
      <Text style={styles.text}>Current humidity: 60%</Text>
      <Text style={styles.text}>Ideal indoor humidity: 30–50%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
});
