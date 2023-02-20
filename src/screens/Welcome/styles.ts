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
  textCont: {
    height: 100,
    borderRadius: 12,
    backgroundColor: colors.black,
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center',
    marginTop: 16,
    marginHorizontal: 30,
  },
  shortDesc: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.white,
    textAlign: 'center',
    marginTop: 12,
    opacity: 0.5,
  },
});
