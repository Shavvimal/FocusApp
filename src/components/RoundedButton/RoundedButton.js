import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export const RoundedButton = ({
    addsubjectprop,
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]} onPress={() => {
            addsubjectprop()
        }
        }
        >
            <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = (size) =>
    StyleSheet.create({
        radius: {
            borderRadius: size / 2,
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: "#fff",
            borderWidth: 2
        },
        text: {
            color: "#fff",
            fontSize: size / 3,
        }

    });
