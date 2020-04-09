import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Icon name="clone" size={16} style={[styles.icon, styles.active]} />
      <Icon name="search" size={16} style={styles.icon} />
      <View style={styles.main}>
        <Icon name="plus" size={16} style={styles.mainIcon} />
      </View>
      <Icon name="bell-o" size={16} style={styles.icon} />
      <Icon name="user-o" size={16} style={styles.icon} />
    </View>
  );
}
