import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import styles from './sharedStyles';

const rainData = [
  { time: '3:00 PM', value: 10 },
  { time: '4:00 PM', value: 20 },
  { time: '5:00 PM', value: 30 },
  { time: '6:00 PM', value: 40 },
  { time: '7:00 PM', value: 50 },
  { time: '8:00 PM', value: 60 },
  { time: '9:00 PM', value: 70 },
  { time: '10:00 PM', value: 80 },
  { time: '11:00 PM', value: 90 },
  { time: '12:00 AM', value: 100 },
  { time: '1:00 AM', value: 90 },
  { time: '2:00 AM', value: 80 },
  { time: '3:00 AM', value: 70 },
];

export default function RainChanceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🌧️ Chance of Rain</Text>
      <Text style={styles.value}>10%</Text>
      <Text style={styles.recommendation}>Light chance of rain later today.</Text>

      <Text style={styles.chartTitle}>Hourly Rain Forecast</Text>
      {rainData.map((item, index) => (
        <View key={index} style={styles.chartRow}>
          <Text style={styles.chartTime}>{item.time}</Text>
          <View style={[styles.chartBar, { width: `${item.value / 2}%` }]}>
            <Text style={styles.chartBarText}>{item.value}%</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
