import {RFValue} from 'react-native-responsive-fontsize';

// const accent = '#d99240';
const accent = '#e65829';

export const theme = {
  colors: {
    light: {
      theme: '#fff',
      primary: accent,
      primaryOpaque: '#ffe9df',
      light: '#e1e2e4',
      dark: '#080808',
      grey: '#747f8f',
      success: '#219F94',
    },
  },
  fonts: {
    family: {
      regular: 'NotoSans-Regular',
      light: 'NotoSans-Light',
      medium: 'NotoSans-medium',
      bold: 'NotoSans-Bold',
      semibold: 'NotoSans-SemiBold',
    },
    fonSize: {
      xsmall: RFValue(10),
      small: RFValue(12),
      semiRegular: RFValue(14),
      regular: RFValue(16),
      semiLarge: RFValue(18),
      large: RFValue(20),
      xLarge: RFValue(22),
      title: RFValue(26),
    },
    color: {
      light: '#e1e2e4',
      dark: '#1B2430',
      grey: '#747f8f',
      accent: accent,

      danger: "#EB1D36"
    },
  },
};
