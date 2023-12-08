import React, { FC } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Screen, Text, Card, Button } from "app/components";
import { colors, spacing } from '../../theme';
import { navigationRef } from 'app/navigators';
import AsyncStorage from '@react-native-async-storage/async-storage';

const onBoardComplete = async () => {await AsyncStorage.setItem('hasCompletedOnboarding', 'true'); navigationRef.navigate('Welcome')}

export const Step5: FC = () => {
    return (
        <Screen preset='scroll' style={$container}>
            <View style={$cardContainer}>
                <Text
                    style={$mainTextGreen}
                    tx="step5.whySiira"
                    preset="heading"
                />
                <Card title='step5.tenOut' description='step5.foundTheCaliber' titleColor={colors.green} descriptionColor={colors.green} backgroundColor={colors.grey_dark} />
                <Card title='step5.97' description='step5.sawBoost' titleColor={colors.green} descriptionColor={colors.green} backgroundColor={colors.grey_light} />
                <Card title='step5.95' description='step5.hadFreedUp' titleColor={colors.green} descriptionColor={colors.green} backgroundColor={colors.grey_dark} />
                <Button tx='common.getStarted' onPress={onBoardComplete}  style={$getStartedButton} />
            </View>
        </Screen>
    );
};

const $container: ViewStyle = {
    flex: 1,
    marginTop: spacing.xxxl,
    backgroundColor: colors.background,
};

const $cardContainer: ViewStyle = {
    marginVertical: spacing.xxxl,
    paddingHorizontal: spacing.lg,
};

const $getStartedButton: ViewStyle = {

    marginBottom: spacing.lg,
};
const $mainTextGreen: TextStyle = {
    color: colors.green,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: spacing.md,
};