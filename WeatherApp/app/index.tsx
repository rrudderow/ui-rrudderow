import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

export default function WeatherScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          city: data.name,
        });
      } else {
        setWeather(null);
        alert('City not found');
      }
    } catch (e) {
      alert('Failed to fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
      {weather && (
        <View style={styles.result}>
          <Text style={styles.city}>{weather.city}</Text>
          <Text style={styles.temp}>{weather.temp}°C</Text>
          <Text style={styles.desc}>{weather.description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  result: { marginTop: 20, alignItems: 'center' },
  city: { fontSize: 24, fontWeight: 'bold' },
  temp: { fontSize: 40, marginVertical: 10 },
  desc: { fontSize: 18, fontStyle: 'italic' },
});
