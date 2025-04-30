// sharedStyles.js
import { StyleSheet } from 'react-native';

const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2e9',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2e7d32',
    marginBottom: 10,
  },
  value: {
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
    backgroundColor: '#81c784',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  chartBarText: {
    color: 'white',
    fontWeight: 'bold',
  },

// Moon-specific additions
  centeredBlock: {
    alignItems: 'center',
    marginVertical: 20,
  },
  moonEmoji: {
    fontSize: 72,
  },
  phaseLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 10,
  },
  sectionBlock: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  event: {
    fontSize: 16,
    marginBottom: 6,
    color: '#1b5e20',
  },
  eventDate: {
    fontWeight: '600',
    color: '#388e3c',
  },
  cycleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  progressTrack: {
    flex: 1,
    height: 10,
    backgroundColor: '#c8e6c9',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  progressFill: {
    width: '62%', // Example: Day 18 of 29
    height: 10,
    backgroundColor: '#66bb6a',
    borderRadius: 5,
  },
  cyclePhase: {
    fontSize: 20,
  },
  cycleLabel: {
    textAlign: 'center',
    fontSize: 14,
    color: '#1b5e20',
    marginBottom: 20,
  },
  allPhasesTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginTop: 10,
  },
  phaseRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  phase: {
    fontSize: 16,
    marginVertical: 4,
    color: '#2e7d32',
    textAlign: 'center',
    width: '45%',
  },

});

export default sharedStyles;
