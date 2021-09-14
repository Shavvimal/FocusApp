import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-paper";
import { RoundedButton } from '../../components/RoundedButton/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
    const [tempItem, setTempItem] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}><Text style={styles.text} >What would you like to focus on?</Text>
                <View style={styles.inputContainer} >

                    <TextInput style={styles.input} onSubmitEditing={
                        ({ nativeEvent }) => {
                            setTempItem(nativeEvent.text)
                        }
                    } />
                    <RoundedButton title="+" size={50} addsubjectprop={() => {
                        addSubject(tempItem);
                    }} />
                </View>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: fontSizes.lg
    },
    titleContainer: {
        flex: 0.5,
        padding: spacing.md,
        justifyContent: "center",
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        marginRight: spacing.md,
    }


});
