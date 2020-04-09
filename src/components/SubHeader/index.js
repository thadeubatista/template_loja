import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';
import Button from '../Button';

export default function SubHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri:
            'https://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=64&d=identicon',
        }}
      />
      <View styles={styles.profileInfo}>
        <Text style={styles.name}>Thadeu Batista</Text>
        <Text style={styles.bio}>Head de programação</Text>

        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}>Mensagem</Button>
          <Button type="outline">Seguir</Button>
        </View>
      </View>
    </View>
  );
}
