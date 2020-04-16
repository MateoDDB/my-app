import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color.js';

export const style = StyleSheet.create ({
    subHeader: {
        backgroundColor: APP_COLORS.darkPrimary,
        height: 50
    },
    header: {
        backgroundColor: APP_COLORS.primary,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: APP_COLORS.shadow,
        shadowOpacity: 0.2,
        shadowOffset: { height: 10 }
    },
    text: {
        color: APP_COLORS.primaryText,
        fontSize: 30
    }
});
