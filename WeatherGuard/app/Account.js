import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const Account = ({navigation}) => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/80');
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('Christian Rey Maambong');
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [contactInfo, setContactInfo] = useState('123-456-7890');
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const loadProfileImage = async () => {
      const savedImage = await AsyncStorage.getItem('profileImage');
      if (savedImage) {
        setProfileImage(savedImage);
      }
    };
    loadProfileImage();
  }, []);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri;
      setProfileImage(selectedImageUri);
      await AsyncStorage.setItem('profileImage', selectedImageUri);
    }
  };

  const handleSaveName = () => {
    setIsEditingName(false);
  };

  const handleSaveContact = () => {
    setIsEditingContact(false);
  };

  const handleSavePassword = () => {
    if (newPassword === confirmPassword) {
      // Perform save password logic
      alert('Password successfully changed!');
      setIsEditingPassword(false);
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
            <TouchableOpacity style={styles.addButton} onPress={handleImagePick}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.emailText}>maambong.christianrey@gmail.com</Text>
        </View>

        <Text style={styles.sectionTitle}>Personal Details</Text>

        {/* Username Section */}
        <View style={styles.editableContainer}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.editableRow}>
            {isEditingName ? (
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                onSubmitEditing={handleSaveName}
                autoFocus
              />
            ) : (
              <Text style={styles.buttonText}>{name}</Text>
            )}
            <TouchableOpacity onPress={() => setIsEditingName(!isEditingName)}>
              <Ionicons name="create-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

    
        {/* Change Password Section */}
        <View style={styles.editableContainer}>
          <View style={styles.editableRow}>
            <Text style={styles.buttonText}>Change Password </Text>
            <TouchableOpacity onPress={() => setIsEditingPassword(!isEditingPassword)}>
              <Ionicons name="create-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          {isEditingPassword && (
            <View style={styles.passwordInputs}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSavePassword}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091A3F',
  },
  scrollContent: {
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  addButtonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  emailText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#123264',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  editableContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  editableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#123264',
    borderRadius: 8,
    padding: 15,
  },
  input: {
    backgroundColor: '#E0F7FA',
    borderRadius: 5,
    padding: 10,
    color: '#000',
    marginVertical: 5,
  },
  passwordInputs: {
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: '#123264',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Account;