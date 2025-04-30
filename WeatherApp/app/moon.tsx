import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import sharedStyles from './sharedStyles'; // adjust path if needed

export default function MoonPhaseScreen() {
  const currentPhase = 'Waning Gibbous';
  const currentEmoji = '🌖';
  const fullMoonDate = 'May 3, 2025';
  const newMoonDate = 'May 19, 2025';

  return (
    <ScrollView style={sharedStyles.container}>
      {/* Current Moon Display */}
      <View style={sharedStyles.centeredBlock}>
        <Text style={sharedStyles.title}>🌙 Moon Phase</Text>
        <Text style={sharedStyles.moonEmoji}>{currentEmoji}</Text>
        <Text style={sharedStyles.phaseLabel}>{currentPhase}</Text>
      </View>

      {/* Upcoming Lunar Events */}
      <View style={sharedStyles.sectionBlock}>
        <Text style={sharedStyles.sectionTitle}>Upcoming Lunar Events</Text>
        <Text style={sharedStyles.event}>🌕 Full Moon: <Text style={sharedStyles.eventDate}>{fullMoonDate}</Text></Text>
        <Text style={sharedStyles.event}>🌑 New Moon: <Text style={sharedStyles.eventDate}>{newMoonDate}</Text></Text>
      </View>

      {/* Moon Cycle Progress Bar */}
      <Text style={sharedStyles.chartTitle}>Moon Cycle</Text>
      <View style={sharedStyles.cycleBar}>
        <Text style={sharedStyles.cyclePhase}>🌑</Text>
        <View style={sharedStyles.progressTrack}>
          <View style={sharedStyles.progressFill} />
        </View>
        <Text style={sharedStyles.cyclePhase}>🌕</Text>
      </View>
      <Text style={sharedStyles.cycleLabel}>Current Phase Progress (Day 18 of 29)</Text>

      {/* All Phases Overview */}
      <Text style={sharedStyles.allPhasesTitle}>Moon Phases</Text>
      <View style={sharedStyles.phaseRow}>
        <Text style={sharedStyles.phase}>🌑 New</Text>
        <Text style={sharedStyles.phase}>🌒 Waxing Crescent</Text>
        <Text style={sharedStyles.phase}>🌓 First Quarter</Text>
        <Text style={sharedStyles.phase}>🌔 Waxing Gibbous</Text>
        <Text style={sharedStyles.phase}>🌕 Full</Text>
        <Text style={sharedStyles.phase}>🌖 Waning Gibbous</Text>
        <Text style={sharedStyles.phase}>🌗 Last Quarter</Text>
        <Text style={sharedStyles.phase}>🌘 Waning Crescent</Text>
      </View>
    </ScrollView>
  );
}
