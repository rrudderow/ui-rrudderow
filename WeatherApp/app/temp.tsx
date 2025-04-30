import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import styles from './sharedStyles';


const humidityData = [
  { time: '3:00 PM', value: 76 },
  { time: '4:00 PM', value: 74 },
  { time: '5:00 PM', value: 63 },
  { time: '6:00 PM', value: 59 },
  { time: '7:00 PM', value: 55 },
  { time: '8:00 PM', value: 50 },
  { time: '9:00 PM', value: 48 },
  { time: '10:00 PM', value: 46 },
  { time: '11:00 PM', value: 45 },
  { time: '12:00 AM', value: 45 },
  { time: '1:00 AM', value: 43 },
  { time: '2:00 AM', value: 42 },
  { time: '3:00 AM', value: 43 },
];

export default function HumidityScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🌡️ Current Temperature</Text>
      <Text style={styles.value}>76°F</Text>
      <Text style={styles.recommendation}>It’s warm and comfortable outside.</Text>

      <Text style={styles.chartTitle}>Hourly Temperature Forecast</Text>
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
