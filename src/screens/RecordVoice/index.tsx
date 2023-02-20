import React, {FC, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {pages, ParamList} from '../../constants/pages';
import {styles} from './styles';
import ProgressHeader from '../../components/ProgressHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Bookmark from '../../assets/bookmark.svg';
import Speaker from '../../assets/speaker.svg';
import Mic from '../../assets/mic.svg';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {MicPermission} from '../../helper';

const audioRecorderPlayer = new AudioRecorderPlayer();

interface Props extends NativeStackScreenProps<ParamList, pages.RECORD_VOICE> {}

const RecordVoice: FC<Props> = ({}) => {
  const insects = useSafeAreaInsets();
  const [isRecording, setIsRecording] = useState(false);

  const onStartRecord = async () => {
    let permission = await MicPermission();
    if (permission) {
      setIsRecording(true);
      const result = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener(_e => {
        return;
      });
      setTimeout(async () => {
        await audioRecorderPlayer.stopRecorder();
        setIsRecording(false);
        // it is playing the voice as recorded for testing purpose. Later it will be uploaded to server than it will be back after analyzing
        await audioRecorderPlayer.startPlayer(result);
      }, 10000);
    } else {
      Alert.alert('Permission not granted!');
    }
  };

  return (
    <View style={[styles.container, {paddingTop: insects.top}]}>
      <ProgressHeader progress={0.3} />
      <ImageBackground
        source={require('../../assets/sample.png')}
        style={styles.containerImage}>
        <View style={styles.recordingCont}>
          {isRecording && <Text style={styles.speakText}>Speak now...</Text>}
          <Bookmark style={styles.bookmarkCont} />
          <View style={styles.titleCont}>
            <Speaker />
            <Text style={styles.title}>La estamos haciendo muy bien.</Text>
          </View>
          <Text style={styles.shortDesc}>We are doing very well</Text>
          <TouchableOpacity
            disabled={isRecording}
            onPress={onStartRecord}
            style={styles.micBtn}>
            <Mic />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RecordVoice;
