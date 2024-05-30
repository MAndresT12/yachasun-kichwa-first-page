import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback, Alert } from 'react-native';
import Constants from 'expo-constants';

const VocabularyColumn = ({ title, items }) => (
    <View style={styles.vocabularyColumn}>
        <Text style={styles.vocabularyHeader}>{title}</Text>
        {items.map((item, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => Alert.alert('¡Hola kichuanos!')}>
                <View style={styles.pill}>
                    <Text style={styles.pillText}>{item}</Text>
                </View>
            </TouchableWithoutFeedback>
        ))}
    </View>
);

const Card = ({ title, content }) => (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardContent}>{content}</Text>
        </View>
    </View>
);

const Main = () => {
    const loremContent = "Lorem ipsum dolor sit amet consectetur. Faucibus mattis tincidunt nunc leo lectus cras risus. Euismod netus amet erat nisl elementum faucibus. Eu lectus vulputate lorem egestas aliquam in ante. Rutrum auctor ut semper us.";

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#5B4D28" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>XXXX⭐ X ❤️</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titleTema}>Tema</Text>
                </View>
                <View style={styles.body}>
                    <Card title="Lorem" content={loremContent} />
                    <View style={[styles.cardContainer, styles.vocabulary]}>
                        <View style={[styles.card]}>
                            <Text style={styles.vocabularyTitle}>Vocabulario</Text>
                            <View style={styles.vocabularyTable}>
                                <VocabularyColumn title="Esp" items={['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']} />
                                <VocabularyColumn title="Ing" items={['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']} />
                                <VocabularyColumn title="Kichwa" items={['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.footerButton}>
                            <Text style={styles.footerButtonText}>Siguiente</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#9FC516',
    },
    scrollView: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#5B4D28',
        padding: 10,
        alignItems: 'flex-start'
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
    body: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleTema: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    cardContainer: {
        width: '100%',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 15,
        marginVertical: 10,
        width: 342,
        height: 271,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContent: {
        marginTop: 10,
        fontSize: 16,
    },
    vocabulary: {
        marginTop: 20,
    },
    vocabularyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    vocabularyTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    vocabularyColumn: {
        alignItems: 'center',
    },
    vocabularyHeader: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    pill: {
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        width: 70,
        height: 17,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#000',
    },
    pillText: {
        fontSize: 12,
    },
    footer: {
        marginTop: 20,
        alignItems: 'flex-end',
        marginRight: 10,
    },
    footerButton: {
        backgroundColor: '#822929',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 86,
        height: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Main;
