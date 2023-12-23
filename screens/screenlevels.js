import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Svg, Circle, Rect } from 'react-native-svg';

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

  const [highlightedCircle, setHighlightedCircle] = useState(null); // Track the pressed circle

  const handleCirclePress = (circleName) => {
    setHighlightedCircle(circleName === highlightedCircle ? null : circleName);
  };

  const isCircleHighlighted = (circleName) => {
    return circleName === highlightedCircle;
  };

  const progress1 = 0.9;
  const progress2 = 0.69;
  const progress3 = 0.25;
  const progress4 = 0.33;

  const progressRes = 0.5;

  const pHUP = 0.9;
  const pHDOWN = 0.3;
  const nutrient = 0.61;

  const renderCircle = (circleName, progress, index) => {
    const isHighlighted = isCircleHighlighted(circleName);

    return (
      <TouchableOpacity
        key={index}
        onPress={() => handleCirclePress(circleName)}
        style={{ marginRight: 20, position: 'relative' }}
      >
        <Svg height="120" width="120">
          <Circle
            cx="70"
            cy="70"
            r="40"
            stroke={isHighlighted ? '#0f52ba' : 'lightblue'}
            strokeWidth="5"
            fill={isHighlighted ? 'lightblue' : '#0f52ba'}
            strokeDasharray={[Math.PI * 2 * 50, Math.PI * 2 * 50]}
            strokeDashoffset={(1 - progress) * Math.PI * 2 * 50}
          />
        </Svg>
        <Text style={styles.circleTitle}>{circleName}</Text>
        <Text style={styles.progressText}>{(progress * 100).toFixed(0)}%</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* Header */}
      <Text style={[styles.title, styles.heading]}>LEVELS</Text>

      {/* Background Rectangle */}
      <View style={styles.backgroundRectangle} />
      <Text style={styles.backgroundTitle}>Water Tank Levels</Text>

      {/* Circles */}
      <View style={styles.circlesContainer}>
        <View style={styles.circleRow}>
          {renderCircle('Rainwater Tank A', progress1, 0)}
          {renderCircle('Rainwater Tank B', progress2, 1)}
        </View>
        <View style={styles.circleRow}>
          {renderCircle('Deepwell Tank A', progress3, 2)}
          {renderCircle('Deepwell Tank B', progress4, 3)}
        </View>
      </View>

      {/* Background Rectangle for reservoir */}
      <View style={styles.backgroundRectangleReser} />
      <Text style={styles.backgroundTitleRes}>
        Reservoir Level                   Dosers Level
      </Text>

      {/* Circles */}
      <View style={styles.circlesContainerRes}>
        <TouchableOpacity
          onPress={() => handleCirclePress('Reservoir')}
          style={{ marginRight: 60, position: 'relative' }}
        >
          <Svg height="350" width="300">
            <Circle
              cx="80"
              cy="140"
              r="70"
              stroke={isCircleHighlighted('Reservoir') ? '#98ff98' : '#32cd32'}
              strokeWidth="10"
              fill={isCircleHighlighted('Reservoir') ? '#32cd32' : '#98ff98'}
              strokeDasharray={[Math.PI * 2 * 70, Math.PI * 2 * 50]}
              strokeDashoffset={(1 - progressRes) * Math.PI * 2 * 50}
            />
          </Svg>
          <Text style={styles.progressTextRes}>{(progressRes * 100).toFixed(0)}%</Text>
        </TouchableOpacity>
      </View>

      {/* Background Rectangle for dosers*/}
      <View style={styles.backgroundRectangleDos}>
        {/* Vertical Bar Graph Progress Bar for dosers */}
        <View style={styles.verticalProgressPhUP}>
          <Svg height="200" width="400">            
          <Rect
              x="122.5"
              y="200"
              width="35"
              height={1* -200} // Adjust the height based on the progress
              fill="gray"
            />
            <Rect
              x="120"
              y="200"
              width="40"
              height={pHUP* -200} // Adjust the height based on the progress
              fill="#1aa7ec"
            />
          </Svg>

        </View>
        <View style={styles.verticalProgressPhDOWN}>
          <Svg height="200" width="400">
            
          <Rect
              x="122.5"
              y="200"
              width="35"
              height={1* -200} // Adjust the height based on the progress
              fill="gray"
            />
            <Rect
              x="120"
              y="200"
              width="40"
              height={pHDOWN* -200} // Adjust the height based on the progress
              fill="red"
            />
          </Svg>

        </View>     


        <View style={styles.verticalProgressNutrient}>
          <Svg height="200" width="400">
            
          <Rect
              x="122.5"
              y="200"
              width="35"
              height={1* -200} // Adjust the height based on the progress
              fill="gray"
            />
            <Rect
              x="120"
              y="200"
              width="40"
              height={nutrient* -200} // Adjust the height based on the progress
              fill="yellow"
            />
          </Svg>

      </View>
      </View>


      {/* User Profile Information */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>{/* Add profile information UI here */}</View>
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
    backgroundColor: 'black'
  },
  backgroundRectangle: {
    position: 'absolute',
    top: 100,
    left: '20%',
    transform: [{ translateX: -60 }],
    width: 370,
    height: 300,
    backgroundColor: 'lightgray',
    zIndex: -1,
    borderRadius: 10,
    padding: 20,
  },
  backgroundRectangleReser:{
    position: 'absolute',
    top: 450,
    left: '20%', // Center the rectangle horizontally
    transform: [{ translateX: -60 }], // Adjust the translation based on the rectangle's width
    width: 180,
    height: 250, // Adjust the height based on your design
    backgroundColor: 'lightgray',
    zIndex: -1,
    borderRadius: 10,
  },

  backgroundRectangleDos:{
    position: 'absolute',
    top: 450,
    left: '65%', // Center the rectangle horizontally
    transform: [{ translateX: -60 }], // Adjust the translation based on the rectangle's width
    width: 180,
    height: 250, // Adjust the height based on your design
    backgroundColor: 'lightgray',
    zIndex: -1,
    borderRadius: 10,
  },

  verticalProgressPhUP: {
    position: 'absolute',
    bottom: 0,
    left: '60%', // Adjust the position as needed
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: 250,
  },


  verticalProgressPhDOWN: {
    position: 'absolute',
    bottom: 0,
    left: '95%', // Adjust the position as needed
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: 250,
  },


  verticalProgressNutrient: {
    position: 'absolute',
    bottom: 0,
    left: '128%', // Adjust the position as needed
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: 250,
  },
  backgroundTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: -50,
    marginLeft: -230,
    marginTop: 20
  },

  backgroundTitleRes: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: -50,
    marginLeft: -70,
    marginTop: 40
  },

  circlesContainerRes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,  // Add margin from the top if needed
  },
  progressTextRes: {
    position: 'absolute',
    top: '35%',
    left: '47%',
    transform: [{ translateX: -80}, { translateY: -10 }], // Adjust based on the desired positioning
    color: 'white',
    fontSize: 40,
    fontWeight: 'regular',
    zIndex: 0, // Place it above the circle
  },
  progressText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    //right: '50%',
    transform: [{ translateX: -8 }, { translateY: -6 }], // Adjust based on the desired positioning
    color: 'white',
    fontSize: 20,
    fontWeight: 'regular',
    zIndex: 1, // Place it above the circle
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,  // Adjust the distance from the content below
    marginTop: 75,  // Add margin from the top if needed
  },
  circleTitle: {
    position: 'absolute',
    top: '15%',
    left: '40%',
    transform: [{ translateX: -20 }, { translateY: -10 }],  // Adjust based on the desired positioning
    color: 'black',
    fontSize: 12,
    fontWeight: 'regular',
    zIndex: 1,  // Place it above the circle
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'white'
  },
  heading: {
    fontSize: 25,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
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