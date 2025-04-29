import { View, Text, StyleSheet } from 'react-native';

export default function WindScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wind</Text>
      <Text style={styles.text}>Speed: 15 km/h</Text>
      <Text style={styles.text}>Direction: NW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
});
