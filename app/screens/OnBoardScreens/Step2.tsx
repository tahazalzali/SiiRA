import React, { FC } from 'react';
import { View, ImageStyle, ViewStyle, TextStyle } from 'react-native';
import { AutoImage, Screen, Text } from "app/components";
import { colors, spacing } from '../../theme';

const searchImage = require('../../../assets/images/search.png');
const hireImage = require('../../../assets/images/hire.png');
const growImage = require('../../../assets/images/grow.png');

export const Step2: FC = () => {
    return (
        <Screen preset='scroll' style={$container}>
            <View style={$topContainer}>
             <AutoImage source={searchImage} style={$imageStyle} />
                <Text
                    style={$mainTextOrange}
                    tx="step2.search"
                    preset="heading"
                />
                <Text
                    style={$subText}
                    tx="step2.locateTalent"
                    preset="subheading"
                />
                <AutoImage source={hireImage} style={$imageStyle} />
                <Text
                    style={$mainTextOrange}
                    tx="step2.hire"
                    preset="heading"
                />
                <Text
                    style={$subText}
                    tx="step2.topCandidates"
                    preset="subheading"
                />
                <AutoImage source={growImage} style={$imageStyle} />
                <Text
                    style={$mainTextOrange}
                    tx="step2.retain"
                    preset="heading"
                />
                <Text
                    style={$subText}
                    tx="step2.afterHiring"
                    preset="subheading"
                />
            </View>
        </Screen>
    );
};

const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
};

const $topContainer: ViewStyle = {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: "57%",
    justifyContent: "center",
    marginVertical: spacing.xxxl,
    paddingVertical: spacing.xxxl,

    paddingHorizontal: spacing.lg,
};

const $imageStyle: ImageStyle = {
    height: 200,
    width: 300,
    resizeMode: 'contain',
    marginBottom: spacing.md,
};

const $mainTextOrange: TextStyle = {
    color: colors.orange,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: spacing.md,
    textAlign: 'center',
};

const $subText: TextStyle = {
    color: '#595a5c',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: spacing.lg,
};
