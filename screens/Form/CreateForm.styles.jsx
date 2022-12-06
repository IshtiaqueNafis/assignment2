import {StyleSheet} from 'react-native';


export const CreateFormStyles = StyleSheet.create({
    loginContainer: {
        width: '120%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,

    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },

    errorText: {
        fontSize: 10,
        color: 'red',
    },
});
