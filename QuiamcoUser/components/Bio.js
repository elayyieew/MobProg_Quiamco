import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Bio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Short bio</Text>
      <Text style={styles.bio}>
      At present, I am a committed third-year BS in Information Technology student at the University of Science and Technology of Southern Philippines (USTP). Passionate about technology as well as design, I have explored areas of video editing, software application development, illustration and programming and have grown my skills in each facet. These experiences have made it possible for me to combine creativity and technical skills in creating applications that are user-centered. Looking ahead, I look forward to gaining more knowledge and being involved in projects that advance the field of technology.      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderColor: '#414859',
    borderWidth: 2,
    marginTop: 30,
    marginLeft: 30,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center', 
  },
});

export default Bio;
