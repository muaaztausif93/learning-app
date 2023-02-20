import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {LinearProgress} from '@rneui/themed';
import Close from '../../assets/cross.svg';
import More from '../../assets/more-horizontal.svg';
import {colors} from '../../styles/colors';

interface Props {
  progress: number;
  onClickCross?: () => void;
  onClickMore?: () => void;
}

const ProgressHeader: FC<Props> = ({progress, onClickCross, onClickMore}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClickCross}>
        <Close />
      </TouchableOpacity>
      <LinearProgress
        trackColor={colors.gray}
        color={colors.primary}
        variant="determinate"
        value={progress}
        style={styles.progressBar}
      />
      <TouchableOpacity onPress={onClickMore}>
        <More />
      </TouchableOpacity>
    </View>
  );
};

export default ProgressHeader;
