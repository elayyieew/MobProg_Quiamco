import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import axios from 'axios';

const Homepage = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);

  // API Key and Base URL
  const API_KEY = '9e21492df56af56c9454a0cdfb503713';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  // Fetch Weather Data
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: 'Cagayan de Oro', // City name
          units: 'metric',     // Temperature in Celsius
          appid: API_KEY,      // Your API Key
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Define weather images
  const getWeatherImage = (condition) => {
    switch (condition) {
      case 'Clear':
        return require('../assets/images/resources/sun.png'); // Sunny
      case 'Clouds':
        return require('../assets/images/resources/cloud.png'); // Cloudy
      case 'Rain':
        return require('../assets/images/resources/rainy.png'); // Rainy
      case 'Thunderstorm':
        return require('../assets/images/resources/thunder.png'); // Thunderstorm
      default:
        return require('../assets/images/resources/cloud.png'); // Default to cloudy
    }
  };

  return (
    <GradientBackground>
      {/* Top Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/small_logo.png')} // Add your logo file in the assets folder
          style={styles.logo}
        />
      </View>

      {/* Location Section */}
      <View style={styles.header}>
        <Text style={styles.locationText}>{weatherData?.name || 'Loading...'}</Text>
      </View>

      {/* Weather Icon and Temperature */}
      <View style={styles.weatherSection}>
        <Image
          source={weatherData ? getWeatherImage(weatherData.weather[0].main) : require('../assets/images/resources/cloud.png')}
          style={styles.weatherIcon}
        />
        <Text style={styles.temperatureText}>
          {weatherData ? `${weatherData.main.temp}°C` : '...'}
        </Text>
        <Text style={styles.weatherConditionText}>
          {weatherData ? weatherData.weather[0].description : 'Loading...'}
        </Text>
        <Text style={styles.dateTimeText}>
          {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}
        </Text>
      </View>

      {/* Scrollable Weather Forecast */}
      <Text style={styles.weekly}>Weekly Forecast</Text>
      <View style={styles.forecastSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {Array.from({ length: 7 }).map((_, index) => (
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.dayText}>
                {['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'][index]}
              </Text>
              <Image
                source={index % 2 === 0 ? require('../assets/images/resources/sun.png') : require('../assets/images/resources/rainy.png')}
                style={styles.forecastIcon}
              />
              <Text style={styles.tempText}>
                {index % 2 === 0 ? '34°' : '32°'}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,  
    marginBottom: 15, 
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain', 
  },
  header: {
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  weatherSection: {
    alignItems: 'center', 
  },
  weatherIcon: {
    width: 230, 
    height: 230, 
    resizeMode: 'contain',
    marginBottom: 15, 
  },
  temperatureText: {
    fontSize: 54,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  weatherConditionText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 5, 
  },
  dateTimeText: {
    fontSize: 14,
    color: 'white',
    marginTop: 5, 
  },
  forecastSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 75,
    height: 150,
    marginRight: 8, 
  },
  dayText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forecastIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginVertical: 9, 
  },
  tempText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5, 
  },
  weekly: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,  
    textAlign: 'left', 
  }
});

export default Homepage;
