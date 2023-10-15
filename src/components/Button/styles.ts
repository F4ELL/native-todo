import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.BLUE_DARK,
    justifyContent: "center",
    alignItems: "center"
  },
});
