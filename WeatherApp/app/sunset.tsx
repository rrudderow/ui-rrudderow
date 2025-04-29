import { View, Text, StyleSheet } from 'react-native';

export default function SunsetScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sunset</Text>
      <Text style={styles.text}>Sunset is at 7:42 PM</Text>
      <Text style={styles.text}>Golden hour starts at 7:00 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
});
