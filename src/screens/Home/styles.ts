import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_600
  },
  form: {
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 4,
    marginTop: -27
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  created: {
    fontSize: 14,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.BLUE
  },
  completed: {
    fontSize: 14,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.PURPLE
  },
  count: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: THEME.COLORS.GRAY_400
  },
  amount: {
    fontSize: 12,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_200
  },
  list: {
    paddingHorizontal: 24,
  }
});
