import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <TouchableOpacity>
        <Button
          title="Go to home"
          onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
