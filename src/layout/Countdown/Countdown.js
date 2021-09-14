import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { GlobStyles } from '../../styles/GlobStyles';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time
export const Countdown = ({
    minutes = 20,
    isPaused,
}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes))
    const minute = Math.floor(millis / 1000 / 60) % 60
    const second = Math.floor(millis / 1000) % 60
    return (
        <View style={GlobStyles.container}>
            <Text style={styles.text}>{formatTime(minute)}:{formatTime(second)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        color: "white",
        fontSize: fontSizes.xxxxl,
        fontWeight: "bold",
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
        borderRadius: 20

    },
});