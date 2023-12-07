import React, { FC } from 'react';
import { View, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { AutoImage, Text, Screen, Icon } from "app/components";
import { colors, spacing } from '../../theme';


type CardProps = {
    children: React.ReactNode,
    backgroundColor: string
}

const vsImage = require('../../../assets/images/vs-image.png');
const CheckIcon: FC = () => <Icon icon='check' color={colors.green} style={{ marginLeft: 5 }} />
const RowContainer: FC = ({ children }) => <View style={$rowContainer}>{children}</View>
const CloseIcon: FC = () => <Icon icon='x' color={colors.error} style={{ marginLeft: 5 }} />
const CardHeader = ({ children, backgroundColor }:CardProps) => (<View style={[{ backgroundColor }, $cardHeader]}>{children}</View>);
const Card = ({ children }:CardProps) => (<View style={$cardStyle}>{children}</View>);


export const Step4: FC = () => {
    return (
        <Screen preset='scroll' >
            <View style={$container}>

                <Card>
                    <CardHeader backgroundColor={colors.grey_light}>
                        <Text style={$headerGrey} tx="step4.freelancers" preset="heading" />
                    </CardHeader>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.reduceOffice" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.keepBudget" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.hireFor" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.workFrom" />
                    </RowContainer>
                    <RowContainer>
                        <CloseIcon />
                        <Text style={$textSmallGrey} tx="step4.dedication" />
                    </RowContainer>
                    <RowContainer>
                        <CloseIcon />
                        <Text style={$textSmallGrey} tx="step4.highCaliber" />
                    </RowContainer>
                    <RowContainer>
                        <CloseIcon />
                        <Text style={$textSmallGrey} tx="step4.fullAttention" />
                    </RowContainer>
                    <RowContainer>
                        <CloseIcon />
                        <Text style={$textSmallGrey} tx="step4.controlOver" />
                    </RowContainer>
                    <RowContainer>
                        <CloseIcon />
                        <Text style={$textSmallGrey} tx="step4.betterTeam" />
                    </RowContainer>
                    <RowContainer>
                        <CloseIcon />

                        <Text style={$textSmallGrey} tx="step4.alignWith" />
                    </RowContainer>
                </Card>

                <AutoImage source={vsImage} style={$vsImageStyle} />
                <Card>
                    <CardHeader backgroundColor={colors.green}>
                        <Text style={$headerGreen} tx="step4.didicatedRemote" preset="heading" />
                    </CardHeader>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.reduceOffice" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.keepBudget" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.hireFor" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.workFrom" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.dedication" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.highCaliber" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.fullAttention" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.controlOver" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.betterTeam" />
                    </RowContainer>
                    <RowContainer>
                        <CheckIcon />
                        <Text style={$textSmallGrey} tx="step4.alignWith" />
                    </RowContainer>
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
      , marginBottom: spacing.sm }

const $rowContainer: ViewStyle = {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between'
};

const $cardStyle: ViewStyle = {
     borderRadius: 12, borderBottomWidth: 2.5,
    borderLeftWidth: 1.5,
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


