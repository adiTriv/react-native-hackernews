import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const globalStyles = StyleSheet.create({
  text: {
    color: theme.fonts.color.dark,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.fonSize.regular,
    marginBottom: -5,
  },
  textSmall: {
    color: theme.fonts.color.dark,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.fonSize.small,
  },
  textWhite: {
    color: theme.fonts.color.light,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.fonSize.regular,
  },
  textHeading: {
    color: theme.fonts.color.dark,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.fonSize.semiLarge,
  },
  title: {
    color: theme.fonts.color.dark,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.fonSize.title,
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  placeCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: theme.colors.light.theme,
  },

  pageSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
