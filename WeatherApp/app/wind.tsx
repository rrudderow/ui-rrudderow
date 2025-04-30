import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import styles from './sharedStyles';

const windData = [
  { time: '3:00 PM', value: 8 },
  { time: '4:00 PM', value: 9 },
  { time: '5:00 PM', value: 10 },
  { time: '6:00 PM', value: 12 },
  { time: '7:00 PM', value: 14 },
  { time: '8:00 PM', value: 12 },
  { time: '9:00 PM', value: 10 },
  { time: '10:00 PM', value: 8 },
  { time: '11:00 PM', value: 6 },
  { time: '12:00 AM', value: 5 },
  { time: '1:00 AM', value: 4 },
  { time: '2:00 AM', value: 3 },
  { time: '3:00 AM', value: 2 },
];

export default function WindSpeedScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>💨 Wind Speed</Text>
      <Text style={styles.value}>8 mph</Text>
      <Text style={styles.recommendation}>Mild breeze currently.</Text>

      <Text style={styles.chartTitle}>Hourly Wind Forecast</Text>
      {windData.map((item, index) => (
        <View key={index} style={styles.chartRow}>
          <Text style={styles.chartTime}>{item.time}</Text>
          <View style={[styles.chartBar, { width: `${item.value * 5}%` }]}>
            <Text style={styles.chartBarText}>{item.value} mph</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
