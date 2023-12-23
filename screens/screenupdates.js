import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// Assume you have some icon images in the assets folder
import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen1 = () => {
    navigation.navigate('ScreenLevels');
  };

  const navigateToScreen2 = () => {
    navigation.navigate('ScreenControl');
  };

  const navigateToScreen3 = () => {
    navigation.navigate('ScreenUpdates');
  };

  const navigateToScreen4 = () => {
    navigation.navigate('ScreenProfile');
  };

  const beforepH = 7;
  const afterpH = 6.3;

  const beforeNutrients = 400;
  const afterNutrients = 750;

  const notifications = [
    'Notification 1: Something happened',
    'Notification 2: Another event occurred',
    'Notification 3: Yet another notification',
  ];

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.heading]}>UPDATES</Text>

      {/* Rectangles in the same row with space between them */}
      <View style={styles.rowContainer}>
        {/* Rectangle 1 */}
        <View style={styles.rectangle1}>
          {/* Your content for Rectangle 1 goes here */}
          <Text style={styles.rectangleTextBefore}>Before: {(beforepH)}pH</Text>
          <Text style={styles.rectangleTextAfter}>After: {(afterpH)}pH</Text>
        </View>

        {/* Space between rectangles */}
        <View style={{ width: 10 }} />

        {/* Rectangle 2 */}
        <View style={styles.rectangle2}>
          {/* Your content for Rectangle 2 goes here */}
          <Text style={styles.rectangleTextBefore}>Before: {(beforeNutrients)}ppm</Text>
          <Text style={styles.rectangleTextAfter}>After: {(afterNutrients)}ppm</Text>
        </View>
      </View>

      {/* List of notifications */}
      <ScrollView style={styles.scrollView}>
        {notifications.map((notification, index) => (
          <Text key={index} style={styles.notificationItem}>
            {notification}
          </Text>
        ))}
      </ScrollView>

      {/* Bottom Navigation Inside appContainer */}
      <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={navigateToScreen1} style={styles.bottomNavButton}>
          <Image source={levelsIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>LEVELS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen2} style={styles.bottomNavButton}>
          <Image source={controlIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>CONTROL</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen3} style={styles.bottomNavButton}>
          <Image source={updatesIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>UPDATES</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen4} style={styles.bottomNavButton}>
          <Image source={profileIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, // Adjust as needed
  },

  rectangle1: {
    width: 180, // Adjust the width of the rectangles as needed
    height: 150, // Adjust the height of the rectangles as needed
    backgroundColor: 'green', // Adjust the color of the rectangles as needed
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  rectangleTextBefore: {
    color: 'white', // Set the text color as needed
    marginLeft: -50, // Adjust the left margin as needed
    fontSize: 17,
  },

  rectangleTextAfter: {
    color: 'white', // Set the text color as needed
    marginLeft: -10, // Adjust the left margin as needed
    fontSize: 25,
    fontWeight: 'bold'
  },


  rectangle2: {
    width: 180, // Adjust the width of the rectangles as needed
    height: 150, // Adjust the height of the rectangles as needed
    backgroundColor: 'gold', // Adjust the color of the rectangles as needed
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  scrollView: {
    flex: 1,
    marginBottom: 0,
  },

  notificationItem: {
    fontSize: 16,
    color: 'white',
    marginVertical: 8,
    marginLeft: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    color: 'white'
    //left: 20, // Adjust left positioning as needed
  },
  heading: {
    marginBottom: 20,
    fontSize: 25,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },

  profilePicture: {
    width: 80,  // Adjust the size of the profile picture as needed
    height: 80,
    borderRadius: 40,  // Half of the width or height to make it circular
    marginBottom: 10,
  },
  
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  labelP: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoP: {
    fontSize: 14,
    marginBottom: 15,
  },
  buttonP: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoutButtonP: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButtonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4, // Adjust as needed to control the spacing between the icon and text
  },

  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  bottomNavButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomNavButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },


});

export default DashboardScreen;
