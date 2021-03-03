import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={300}
                    //source={require('../assets/success.png')}
                    source={{ uri: 'https://www.kootenayrockies.com/wp-content/uploads/2020/01/Summit%20Hikes%20-%20Mt.%20Begbie%20at%20Night%20-%20Eric%20Hanson.jpg' }}
                    style={styles.image}
                    resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> to guess the number
                <Text style={styles.highlight} > {props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        width: '80%',
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary
    },
    resultContainer: {
        marginHorizontal: 30,
        fontFamily: 'open-sans-bold', 
        marginVertical: 30
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }

});

export default GameOverScreen;