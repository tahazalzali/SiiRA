import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import * as Screens from "./index"
import { AppStackScreenProps } from 'app/navigators';
import { colors } from 'app/theme';
import { observer } from 'mobx-react-lite';


interface OnboardingSwiperops extends AppStackScreenProps<"Onboard"> { }

export const OnboardingSwiper: FC<OnboardingSwiperops> = observer(function OnboardingSwiper(
) {
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 20 }}>
      <Swiper showsButtons={false} dotColor={colors.green} activeDotColor={colors.orange} showsPagination loop={false}>
        <Screens.Step1 />
        <Screens.Step2 />
        <Screens.Step3 />
        <Screens.Step4 />
        <Screens.Step5 />
      </Swiper>
    </SafeAreaView>
  )
})

