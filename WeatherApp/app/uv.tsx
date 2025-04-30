import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './sharedStyles';

const uvData = [
  { time: '3:00 PM', value: 5 },
  { time: '4:00 PM', value: 4 },
  { time: '5:00 PM', value: 3 },
  { time: '6:00 PM', value: 2 },
  { time: '7:00 PM', value: 1 },
  { time: '8:00 PM', value: 1 },
  { time: '9:00 PM', value: 0 },
  { time: '10:00 PM', value: 0 },
  { time: '11:00 PM', value: 0 },
  { time: '12:00 AM', value: 0 },
  { time: '1:00 AM', value: 0 },
  { time: '2:00 AM', value: 0 },
  { time: '3:00 AM', value: 0 },
];

export default function UVScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>☀️ Current UV Index</Text>
      <Text style={styles.value}>5 (Moderate)</Text>
      <Text style={styles.recommendation}>
        Wear sunscreen and limit sun exposure from 11am to 3pm.
      </Text>

      <Text style={styles.chartTitle}>Hourly UV Forecast</Text>
        {uvData.map((item, index) => (
          <View key={index} style={styles.chartRow}>
            <Text style={styles.chartTime}>{item.time}</Text>
            <View style={[styles.chartBar, { width: `${item.value * 10}%` }]}>
              <Text style={styles.chartBarText}>{item.value}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
  );
}
