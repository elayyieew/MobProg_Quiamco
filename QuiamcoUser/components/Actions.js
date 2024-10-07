import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const Actions = () => {
  // State to manage follow and like actions
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Jela Quiamco</Text>
        <Text style={styles.title}>USTP Student</Text>
        <Text style={styles.age}>20 Years Old</Text>
      </View>

      {/* Container for stacking the boxes vertically */}
      <View style={styles.buttonContainer}>
        {/* Box for Follow Button */}
        <View style={styles.box}>
          <Button
            title={isFollowing ? 'Following' : 'Follow'}
            color={isFollowing ? '#708541' : '#414859'} 
            onPress={toggleFollow}
          />
        </View>

        {/* Box for Like Button */}
        <View style={styles.box}>
          <Button
            title={isLiked ? 'Liked' : 'Like'}
            color={isLiked ? '#708541' : '#414859'} 
            onPress={toggleLike}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 50, 
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#414859',
  },
  title: {
    fontSize: 16,
    color: '#414859',
    marginTop: 5,
  },
  age: {
    fontSize: 14,
    color: '#414859',
    marginTop: 2,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row', 
    justifyContent: 'center', 
    width: '70%', 
  },
  box: {
    borderWidth: 2,
    borderColor: '#b3c4c6', 
    borderRadius: 40,
    padding: 15,
    marginHorizontal: 10, 
    width: '60%', 
    alignItems: 'center', 
    backgroundColor: '#b3c4c6', 
  },
});

export default Actions;
