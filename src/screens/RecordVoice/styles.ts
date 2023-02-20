import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerImage: {
    flex: 1,
  },
  recordingCont: {
    height: 120,
    width: '90%',
    borderRadius: 12,
    backgroundColor: colors.white,
    marginTop: 24,
    position: 'absolute',
    bottom: 140,
    alignSelf: 'center',
    paddingHorizontal: 8,
  },
  bookmarkCont: {
    marginLeft: 'auto',
    marginTop: 8,
  },
  titleCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    marginLeft: 20,
  },
  shortDesc: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.black,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.5,
  },
  micBtn: {
    alignSelf: 'center',
    marginTop: 12,
  },
  speakText: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.black,
    alignSelf: 'center',
    marginTop: 8,
    opacity: 0.5,
    position: 'absolute',
  },
});
