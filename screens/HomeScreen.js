import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity>
        <Button
          title="Go to details"
          onPress={() => navigation.navigate('Details')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
