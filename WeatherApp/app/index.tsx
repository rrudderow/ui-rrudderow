import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const weather = {
    city: 'Colorado Springs, CO',
    temp: 76,
    high: 77,
    low: 63,
    description: 'Partly cloudy',
  };

  const cards = [
    { label: 'Temperature', value: '76°F', route: '/temp' },
    { label: 'UV Index', value: '5', route: '/uv' },
    { label: 'Humidity', value: '60%', route: '/humidity' },
    { label: 'Air Quality', value: 'Good', route: '/air-quality' },
    { label: 'Rain Chance', value: '30%', route: '/rain' },
    { label: 'Wind', value: '15 km/h NW', route: '/wind' },
    { label: 'Sunset', value: '7:42 PM', route: '/sunset' },
    { label: 'Moon Phase', value: 'Waxing Gibbous', route: '/moon' },
  ];

  return (
    <LinearGradient
      colors={['#2e8b57', '#006400']}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.city}>{weather.city}</Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.description}>{weather.description}</Text>
          <Text style={styles.temp}>{weather.temp}°F</Text>
          <Text style={styles.highLow}>
            High: {weather.high}°F | Low: {weather.low}°F
          </Text>
        </View>

        <View style={styles.cardContainer}>
          {cards.map((card, index) => (
            <Pressable
              key={index}
              style={styles.card}
              onPress={() => router.push(card.route)}
            >
              <Text style={styles.cardTitle}>{card.label}</Text>
              <Text style={styles.cardValue}>{card.value}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    alignItems: 'center',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainContent: {
    alignItems: 'center',
    marginTop: 40,
  },
  temp: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  highLow: {
    fontSize: 16,
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '40%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  cardValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
