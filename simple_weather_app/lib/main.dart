import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Weather App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: WeatherScreen(),
    );
  }
}

class WeatherScreen extends StatefulWidget {
  @override
  _WeatherScreenState createState() => _WeatherScreenState();
}

class _WeatherScreenState extends State<WeatherScreen> {
  String _city = "San Francisco";
  String _description = "Sunny";
  int _temperature = 72;
  IconData _weatherIcon = Icons.wb_sunny;

  void _refreshWeather() {
    // Fake refresh with random data
    final random = Random();
    final cities = ["San Francisco", "London", "Tokyo", "New York", "Paris"];
    final descriptions = ["Sunny", "Cloudy", "Rainy", "Windy", "Snowy"];
    final icons = [
      Icons.wb_sunny,
      Icons.cloud,
      Icons.grain,
      Icons.air,
      Icons.ac_unit
    ];

    setState(() {
      _city = cities[random.nextInt(cities.length)];
      _description = descriptions[random.nextInt(descriptions.length)];
      _temperature = 50 + random.nextInt(50); // 50°F - 99°F
      _weatherIcon = icons[random.nextInt(icons.length)];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Weather App')),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                _city,
                style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 20),
              Icon(
                _weatherIcon,
                size: 80,
              ),
              SizedBox(height: 20),
              Text(
                "$_temperature°F",
                style: TextStyle(fontSize: 48),
              ),
              SizedBox(height: 10),
              Text(
                _description,
                style: TextStyle(fontSize: 24, fontStyle: FontStyle.italic),
              ),
              SizedBox(height: 30),
              ElevatedButton.icon(
                onPressed: _refreshWeather,
                icon: Icon(Icons.refresh),
                label: Text("Refresh"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
