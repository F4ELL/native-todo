import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.GRAY_500,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  },
  task: {
    flex: 1,
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_100,
  },
  checked: {
    textDecorationLine: 'line-through'
  }
});
