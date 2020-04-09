import {StyleSheet} from 'react-native';
import {metrics, fonts, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.tabBarHeight,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.lighter,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  icon: {
    color: colors.light,
  },

  active: {
    color: colors.primary,
  },

  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainIcon: {
    color: colors.white,
  },
});

export default styles;
