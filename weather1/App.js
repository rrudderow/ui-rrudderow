import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

export default function App() {
  const fakeWeather = {
    city: 'San Francisco',
    temperature: '68°F',
    description: 'Sunny',
    icon: 'https://img.icons8.com/emoji/96/000000/sun-emoji.png',
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.weatherContainer}>
        <Text style={styles.city}>{fakeWeather.city}</Text>
        <Image style={styles.icon} source={{ uri: fakeWeather.icon }} />
        <Text style={styles.temp}>{fakeWeather.temperature}</Text>
        <Text style={styles.desc}>{fakeWeather.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherContainer: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
  },
  city: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    color: '#fff',
    marginVertical: 10,
  },
  desc: {
    fontSize: 20,
    color: '#fff',
  },
  icon: {
    width: 96,
    height: 96,
    marginVertical: 10,
  },
});
