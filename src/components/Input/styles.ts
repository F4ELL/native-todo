import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 54,
    maxHeight: 54,
    minHeight: 54,
    padding: 16,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderRadius: 6,

    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_100
  },
  focused: {
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE_DARK
  }
});
