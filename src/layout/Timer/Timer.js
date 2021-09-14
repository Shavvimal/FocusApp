import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { GlobStyles } from '../../styles/GlobStyles';
import { Countdown } from '../Countdown/Countdown';

export const Timer = ({ focusSubject }) => {

    return (
        <View style={GlobStyles.container}>
            <Countdown />
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={GlobStyles.text}>{focusSubject} </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "white",
        fontSize: fontSizes.xl,

    },
});
