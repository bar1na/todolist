import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({addHandler}) {

const [text, setValue] = useState(" ");

const onChange = (text) => {
    setValue(text);
};

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                onChangeText={onChange} 
                placeholder="Впишите задачу..." 
            />
            <Button 
                width="300"
                color="#AA96DA"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center', 
    }, 
    input: { 
        width: 300, 
        borderBottomWidth: 1, 
        borderColor: "#B0C4DE", 
        marginTop: 20, 
        marginBottom: 20, 
        padding: 5, 
 
    }, 
}); 