import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon name="md-arrow-back" size={24} style={styles.icon} />
      <Text style={styles.title}>Profile</Text>
      <Icon name="md-more" size={24} style={styles.icon} />
    </View>
  );
}
