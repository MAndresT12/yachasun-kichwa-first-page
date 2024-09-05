import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback, Alert } from 'react-native';
import { styles } from '../../../styles/globalStylesEx';
import { VocabularyColumnEx } from './VocabularyColumnEx';
import { CardEx } from '../ui/cards/CardEx';

const MainEx = () => {
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
                    <CardEx title="Lorem" content={loremContent} />
                    <View style={[styles.cardContainer, styles.vocabulary]}>
                        <View style={styles.card}>
                            <Text style={styles.vocabularyTitle}>Vocabulario</Text>
                            <View style={styles.vocabularyTable}>
                                <VocabularyColumnEx title="Esp" items={['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']} />
                                {/* <VocabularyColumn title="Ing" items={['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']} /> */}
                                <VocabularyColumnEx title="Kichwa" items={['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']} />
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

export default MainEx;
