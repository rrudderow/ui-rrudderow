import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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
      <Text style={styles.uvValue}>5 (Moderate)</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2e9', // light green background
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2e7d32', // dark green
    marginBottom: 10,
  },
  uvValue: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#388e3c',
    marginBottom: 20,
  },
  recommendation: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#1b5e20',
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e7d32',
  },
  chartContainer: {
    flexGrow: 1,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  chartTime: {
    width: 80,
    fontSize: 16,
    color: '#1b5e20',
  },
  chartBar: {
    height: 24,
    backgroundColor: '#81c784', // medium green
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  chartBarText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
