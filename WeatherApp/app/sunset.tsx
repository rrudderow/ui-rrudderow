import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import sharedStyles from './sharedStyles'; // adjust path as needed

export default function SunriseSunsetScreen() {
  const sunrise = '6:14 AM';
  const sunset = '7:42 PM';

  return (
    <ScrollView style={sharedStyles.container}>
      <Text style={sharedStyles.title}>🌄 Sunrise & Sunset</Text>
      <Text style={sharedStyles.value}>🌅 {sunrise}  |  🌇 {sunset}</Text>
      <Text style={sharedStyles.recommendation}>
        Plan outdoor activities before sunset for best lighting.
      </Text>

      <Text style={sharedStyles.chartTitle}>Sun Path</Text>
      <View style={styles.sunPath}>
        <View style={styles.nightBlock}>
          <Text style={styles.sunLabel}>🌙</Text>
        </View>
        <View style={styles.dayBlock}>
          <Text style={styles.sunLabel}>☀️</Text>
        </View>
        <View style={styles.nightBlock}>
          <Text style={styles.sunLabel}>🌙</Text>
        </View>
      </View>
      <Text style={styles.timeLabels}>
        12:00 AM             12:00 PM             12:00 AM
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sunPath: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  nightBlock: {
    flex: 1,
    backgroundColor: '#a5d6a7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayBlock: {
    flex: 2,
    backgroundColor: '#ffe082',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunLabel: {
    fontSize: 18,
  },
  timeLabels: {
    textAlign: 'center',
    fontSize: 12,
    color: '#1b5e20',
  },
});
