import { View, Text, StyleSheet } from 'react-native';

export default function MoonPhaseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moon Phase</Text>
      <Text style={styles.text}>Current phase: Waxing Gibbous</Text>
      <Text style={styles.text}>Next full moon: May 23</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
});
