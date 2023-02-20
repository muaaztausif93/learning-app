import React, {FC, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {pages, ParamList} from '../../constants/pages';
import {styles} from './styles';
import ProgressHeader from '../../components/ProgressHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImageBackground, Text, View} from 'react-native';

interface Props extends NativeStackScreenProps<ParamList, pages.WELCOME> {}

const Welcome: FC<Props> = ({navigation}) => {
  const insects = useSafeAreaInsets();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(pages.RECORD_VOICE);
    }, 2000);
  }, [])
  return (
    <View style={[styles.container, {paddingTop: insects.top}]}>
      <ProgressHeader progress={0.3} />
      <ImageBackground
        source={require('../../assets/sample.png')}
        style={styles.containerImage}>
        <View style={styles.textCont}>
          <Text style={styles.title}>
            Hola, ¿cómo están tú y tu familia estos días?
          </Text>
          <Text style={styles.shortDesc}>
            Hi, how are you and your family these days?
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
