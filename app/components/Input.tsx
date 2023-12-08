import React, { ComponentType } from 'react';
import { TextInput, TextInputProps, View, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { TxKeyPath } from 'app/i18n';

type InputPresets = keyof typeof $inputPresets;

export interface InputAccessoryProps {
    style: ViewStyle;
}

export interface CustomTextInputProps extends TextInputProps {
    containerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    RightComponent?: ComponentType<InputAccessoryProps>;
    placeholder:TxKeyPath;
    LeftComponent?: ComponentType<InputAccessoryProps>;
    preset?: InputPresets;
}

export function Input(props: CustomTextInputProps) {
    const {
        containerStyle,
        inputStyle,
        RightComponent,
        LeftComponent,
        preset = 'default',
        placeholder,
        ...restTextInputProps
    } = props;

    return (
        <View style={[containerStyle, $inputPresets[preset]]}>
            {LeftComponent && <LeftComponent style={$leftComponentStyle} />}
            <View style={$inputContainerStyle}>
            <TextInput
                style={[inputStyle, $textInputStyle]}
                
                {...restTextInputProps}
            />
            </View>
            {RightComponent && <RightComponent style={$rightComponentStyle} />}
        </View>
    );
}

const $inputPresets: ViewStyle = {
    default: {
        borderWidth: 1,
        borderColor: colors.palette.neutral400,
        flexDirection: 'row',
        height: 40,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15,

    },

};

const $textInputStyle: TextStyle = {
    fontFamily: typography.primary.medium,
    position: 'relative',
    fontSize:15,
    color: colors.text,
    justifyContent: 'center',
};
const $inputContainerStyle: ViewStyle = {
    bottom:-5,
    width: '100%',
}

const $leftComponentStyle: ViewStyle = { marginRight: spacing.sm };
const $rightComponentStyle: ViewStyle = { marginLeft: spacing.sm };
