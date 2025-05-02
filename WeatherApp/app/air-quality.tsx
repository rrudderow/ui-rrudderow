import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import sharedStyles from './sharedStyles';

export default function AirQualityScreen() {
  const aqi = 82; // Example
  const status = 'Moderate';
  const guidance =
    'People who are unusually sensitive should consider reducing prolonged outdoor exertion.';

  const markerPosition = `${(aqi / 500) * 100}%`;

  return (
    <ScrollView style={sharedStyles.container}>
      <Text style={sharedStyles.title}>🌬️ Air Quality Index</Text>
      <Text style={sharedStyles.value}>{aqi} AQI</Text>
      <Text style={sharedStyles.recommendation}>{status}</Text>

      <Text style={sharedStyles.chartTitle}>Air Quality Scale</Text>

      {/* Gradient AQI Bar */}
      <View style={sharedStyles.aqiBarWrapper}>
        <LinearGradient
          colors={[
            '#00e400', // Good (green)
            '#ffff00', // Moderate (yellow)
            '#ff7e00', // Unhealthy SG (orange)
            '#ff0000', // Unhealthy (red)
            '#8f3f97', // Very Unhealthy (purple)
            '#7e0023', // Hazardous (maroon)
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={sharedStyles.aqiGradient}
        />
        <View style={[sharedStyles.aqiMarker, { left: markerPosition }]} />
      </View>

      <Text style={sharedStyles.recommendation}>{guidance}</Text>
    </ScrollView>
  );
}
