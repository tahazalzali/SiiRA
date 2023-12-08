import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { View, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { AutoImage, Screen, Text } from "app/components";
import { colors, spacing } from "../../theme";

const siiraHomeIllustration = require("../../../assets/images/home.png");

export const Step1: FC = observer(function Step1() {

  return (
    <Screen preset='fixed' style={$container}>
      <View style={$topContainer}>
        <Text
          style={$mainTextOrange}
          tx="step1.makeTheWorld"
          preset="heading"
        />
        <Text
          style={$mainTextGreen}
          tx="step1.yourOffice"
          preset="heading"
        />
        <Text
          tx="step1.growAndManage"
          style={$subText}
          preset="subheading"
        />
        <AutoImage style={$siiraHomeIllustration} source={siiraHomeIllustration} resizeMode="contain" />
      </View>
    </Screen>
  )
});

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  backgroundColor: colors.background,
};

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
};

const $mainTextOrange: TextStyle = {
  color: colors.orange,
  fontSize: 22,
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: spacing.md,
};

const $mainTextGreen: TextStyle = {
  color: colors.green,
  fontSize: 22,
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: spacing.md,
};

const $subText: TextStyle = {
  color: colors.green,
  fontSize: 16,
  textAlign: 'center',
  marginHorizontal: spacing.lg,
};

const $siiraHomeIllustration: ImageStyle = {
  height: 200,
  width: 300,
  resizeMode: 'contain',
};

