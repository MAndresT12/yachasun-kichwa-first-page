import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({
    containerModalChat: {
        flex: 1,
        backgroundColor: '#fff',
    },
    closeButtonModalChat: {
        backgroundColor: '#822929',
        padding: 10,
        alignItems: 'center',
    },
    closeButtonTextModalChat: {
        color: '#fff',
        fontSize: 16,
    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentChatModal: {
        width: '90%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    },
});

export default modalStyles;