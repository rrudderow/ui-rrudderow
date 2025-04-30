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
});

export default sharedStyles;
