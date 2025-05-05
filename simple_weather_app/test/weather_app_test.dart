import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:simple_weather_app/main.dart'; // Adjust according to your file structure

void main() {
  testWidgets('Initial UI renders correctly', (WidgetTester tester) async {
  await tester.pumpWidget(MyApp());
  await tester.pumpAndSettle(); // Wait for the UI to settle

  expect(find.text('San Francisco'), findsOneWidget);
  expect(find.text('Sunny'), findsOneWidget);
  expect(find.text('72°F'), findsOneWidget);
  expect(find.byIcon(Icons.wb_sunny), findsOneWidget);
  expect(find.byType(ElevatedButton), findsNothing);
});


  testWidgets('Contains weather icon and temperature text', (WidgetTester tester) async {
    await tester.pumpWidget(MyApp());

    expect(find.byIcon(Icons.wb_sunny), findsOneWidget);
    expect(find.textContaining('°F'), findsOneWidget);
  });
}
