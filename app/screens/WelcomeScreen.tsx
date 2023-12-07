import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ImageStyle, Image, View, ViewStyle, TextStyle } from "react-native"
import {
  AutoImage,
  Text,
  Screen,
  Button
} from "app/components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { Input, Icon } from "app/components"

const welcomeLogo = require("../../assets/images/logo.png")
const homeBackground = require("../../assets/images/home-background.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> { }

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const CountrySelection: FC = () => (
    <React.Fragment>
    <View style={$rowContainer} >
      <Icon icon='lebanon' />
      <Text tx="welcomeScreen.961" preset="label" />
    </View>
          <View style={$dividerStyle} />
    </React.Fragment>
  )

  return (
    <Screen preset="fixed" style={$container}>
      <View style={$topContainer}>
        <AutoImage style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <Text
          style={$welcomeHeading}
          tx="welcomeScreen.welcomeToSiira"
          preset="subheading"
        />
        <Text tx="welcomeScreen.signInBelow" style={$signInText} />
        <Image style={$homeBackground} source={homeBackground} resizeMode="contain" />
      </View>
      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <Input placeholder='welcomeScreen.mobileNumber' keyboardType="numeric" LeftComponent={CountrySelection} containerStyle={$inputTop} />
        <Button tx='welcomeScreen.login'  textStyle={$buttonText} style={$buttonStyle}/>

      </View>

    </Screen>
  )
})

const $container: ViewStyle = {
  justifyContent: 'center',
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  justifyContent: 'flex-end',

  alignItems: "center",
}
const $rowContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: spacing.sm,
  justifyContent: 'center',
}

const $inputTop: TextStyle = {
  marginTop: spacing.xl,
  backgroundColor:colors.background,
  borderRadius: 20,
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 12,
  fontWeight: 'bold',
}

const $dividerStyle: ViewStyle = {
  width: 1, height: '100%', backgroundColor: colors.separator,
  marginRight: spacing.xxs,
}

const $buttonStyle: ViewStyle = {
  width: '80%',
  height: 38,
  marginTop: spacing.lg,
  backgroundColor: colors.green,
  justifyContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  borderRadius: 15,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  backgroundColor: colors.palette.neutral100,
  height: '70%',
}
const $welcomeLogo: ImageStyle = {
  height: 30,
  width: 80,
  alignSelf: "center",
  marginBottom: spacing.sm,
}

const $homeBackground: ImageStyle = {
  width: "100%",
  height: 34
}

const $signInText: TextStyle = {
  marginBottom: spacing.lg,
}

const $welcomeHeading: TextStyle = {
  color: colors.green
}
