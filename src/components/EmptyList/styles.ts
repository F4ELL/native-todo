import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_400
  },
  title: {
    fontSize: 14,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_300,
    marginTop: 16,
    marginBottom: 4
  },
  subtitle: {
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_300
  },
});
