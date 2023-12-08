import React, { FC } from 'react';
import { View, TextStyle, ViewStyle, Dimensions } from 'react-native';
import {  Screen, Text } from "app/components";
import WebView from 'react-native-webview';
import { colors, spacing } from '../../theme';


export const Step3: FC = () => {
    return (
        <Screen preset='fixed' style={$container}>
            <View style={$topContainer}>
                <Text
                    style={$mainTextGreen}
                    tx="step3.ifJim"
                    preset="heading"
                />
                <View style={$videoContainer}>
                    <WebView
                        style={$videoStyle}
                        javaScriptEnabled={true}
                        source={{ uri: 'https://www.youtube.com/embed/qoDBwCYn1Pk' }}
                    />
                </View>
            </View>
        </Screen>
    );
};

const $container: ViewStyle = {
    justifyContent: "center",
    backgroundColor: colors.background,
};

const $videoContainer: ViewStyle = {
    height: 300,
     width: Dimensions.get('screen').width/1.05 
}

const $videoStyle: ViewStyle = {
    flex:1,
}

const $topContainer: ViewStyle = {
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
};

const $mainTextGreen: TextStyle = {
    color: colors.green,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: spacing.md,
    textAlign: 'center',
};

