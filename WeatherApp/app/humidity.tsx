import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import styles from './sharedStyles';

// Your component using `styles.chartRow`, `styles.title`, etc.


const humidityData = [
  { time: '3:00 PM', value: 55 },
  { time: '4:00 PM', value: 58 },
  { time: '5:00 PM', value: 60 },
  { time: '6:00 PM', value: 62 },
  { time: '7:00 PM', value: 65 },
  { time: '8:00 PM', value: 68 },
  { time: '9:00 PM', value: 70 },
  { time: '10:00 PM', value: 73 },
  { time: '11:00 PM', value: 75 },
  { time: '12:00 AM', value: 77 },
  { time: '1:00 AM', value: 78 },
  { time: '2:00 AM', value: 80 },
  { time: '3:00 AM', value: 82 },
];

export default function HumidityScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>💧 Current Humidity</Text>
      <Text style={styles.value}>55%</Text>
      <Text style={styles.recommendation}>Humidity is within a comfortable range.</Text>

      <Text style={styles.chartTitle}>Hourly Humidity Forecast</Text>
      {humidityData.map((item, index) => (
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
