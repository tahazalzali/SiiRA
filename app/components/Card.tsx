import React, { FC } from 'react';
import { View, ViewStyle, TextStyle ,Dimensions} from 'react-native';
import { Text } from './Text';
import {  spacing } from 'app/theme';
import { TxKeyPath } from 'app/i18n';

type CardProps = {
    title: TxKeyPath;
    description: TxKeyPath;
    titleColor: string;
    descriptionColor: string;
    backgroundColor: string;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    descriptionStyle?: TextStyle;
};

export const Card: FC<CardProps> = ({
    title,
    description,
    titleColor,
    descriptionColor,
    backgroundColor,
    style,
    titleStyle,
    descriptionStyle
}) => {

  const $cardContainer: ViewStyle = {
        marginVertical: spacing.lg,
        paddingHorizontal: spacing.xxl,
        borderRadius: 8,
        justifyContent: 'center',
        height: Dimensions.get('screen').height/4,
        backgroundColor, 
        position: 'relative',
        ...style, 
    };

    const $titleStyleCombined: TextStyle = {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: spacing.sm,
        bottom:'10%',
        color: titleColor,
        ...titleStyle,
    };

    const $descriptionStyleCombined: TextStyle = {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: spacing.lg,
        color: descriptionColor,
        ...descriptionStyle,
    };

    return (
        <View style={$cardContainer}>
            <Text adjustsFontSizeToFit style={$titleStyleCombined} tx={title}/>
            <Text adjustsFontSizeToFit style={$descriptionStyleCombined} tx={description}/>
        </View>
    );
};
