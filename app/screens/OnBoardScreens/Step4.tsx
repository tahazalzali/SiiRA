import React, { FunctionComponent } from 'react';
import { View, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { AutoImage, Text, Screen, Icon } from "app/components";
import { colors, spacing } from '../../theme';
import { TxKeyPath } from 'app/i18n';

interface CardProps {
    children: React.ReactNode;
    backgroundColor: string;
}

interface RowProps {
    iconType: 'check' | 'x';
    textKey: TxKeyPath;
}
const CheckIcon: FunctionComponent = () => <Icon icon='check' color={colors.green} style={$cardContainer} />;
const CloseIcon: FunctionComponent = () => <Icon icon='x' color={colors.error} style={$cardContainer} />;
const vsImage = require('../../../assets/images/vs-image.png');


const CardElement: FunctionComponent<RowProps> = ({ iconType, textKey }) => (
    <View style={$rowContainer}>
        {iconType === 'check' ? <CheckIcon /> : <CloseIcon />}
        <Text style={$textSmallGrey} tx={textKey} />
    </View>
);

const CardHeader: FunctionComponent<CardProps> = ({ children, backgroundColor }) => (
    <View style={[{ backgroundColor }, $cardHeader]}>{children}</View>
);

const Card: FunctionComponent<Pick<CardProps, 'children'>> = ({ children }) => (
    <View style={$cardStyle}>{children}</View>
);
export const Step4: FunctionComponent = () => {
    return (
        <Screen preset='scroll' >
            <View style={$container}>

                <Card>
                    <CardHeader backgroundColor={colors.grey_light}>
                        <Text style={$headerGrey} tx="step4.freelancers" preset="heading" />
                    </CardHeader>
                    <CardElement iconType='check' textKey='step4.reduceOffice' />
                    <CardElement iconType='check' textKey="step4.keepBudget" />
                    <CardElement iconType='check' textKey="step4.hireFor" />
                    <CardElement iconType='check' textKey="step4.workFrom" />
                    <CardElement iconType='x' textKey="step4.dedication" />
                    <CardElement iconType='x' textKey="step4.highCaliber" />
                    <CardElement iconType='x' textKey="step4.fullAttention" />
                    <CardElement iconType='x' textKey="step4.controlOver" />
                    <CardElement iconType='x' textKey="step4.betterTeam" />
                    <CardElement iconType='x' textKey="step4.alignWith" />
                </Card>

                <AutoImage source={vsImage} style={$vsImageStyle} />
                <Card>
                    <CardHeader backgroundColor={colors.green}>
                        <Text style={$headerGreen} tx="step4.didicatedRemote" preset="heading" />
                    </CardHeader>
                    <CardElement iconType='check' textKey='step4.reduceOffice' />
                    <CardElement iconType='check' textKey="step4.keepBudget" />
                    <CardElement iconType='check' textKey="step4.hireFor" />
                    <CardElement iconType='check' textKey="step4.workFrom" />
                    <CardElement iconType='check' textKey="step4.dedication" />
                    <CardElement iconType='check' textKey="step4.highCaliber" />
                    <CardElement iconType='check' textKey="step4.fullAttention" />
                    <CardElement iconType='check' textKey="step4.controlOver" />
                    <CardElement iconType='check' textKey="step4.betterTeam" />
                    <CardElement iconType='check' textKey="step4.alignWith" />
                </Card>
            </View>
        </Screen>
    );
};



const $container: ViewStyle = {
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.background,
    marginVertical: spacing.lg,
    paddingVertical: spacing.xxxl,
};

const $headerGrey: TextStyle = {
    color: colors.grey,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    textAlign: 'center',
};
const $headerGreen: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    textAlign: 'center',
};

const $cardHeader: ViewStyle = {
    borderRadius: 12,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0
    , marginBottom: spacing.sm
}

const $rowContainer: ViewStyle = {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
};

const $cardContainer: ImageStyle = {
    marginLeft: spacing.xxs,
}

const $cardStyle: ViewStyle = {
    borderRadius: 12, borderBottomWidth: 2.5,
    borderLeftWidth: 1.5,
    width: '100%',
    borderRightWidth: 1.5,
    borderTopWidth: 0.8, marginVertical: spacing.sm, borderColor: colors.grey_dark
}

const $textSmallGrey: TextStyle = {
    color: colors.grey,
    fontSize: 14,
    textAlign: 'left',
    width: '80%',
    marginBottom: spacing.xs,
};


const $vsImageStyle: ImageStyle = {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginVertical: spacing.md,
};


