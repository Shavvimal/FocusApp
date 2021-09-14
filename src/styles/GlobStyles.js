import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

export const GlobStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: fontSizes.lg,
        textAlign: "center",
    }
});