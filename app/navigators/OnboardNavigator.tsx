import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import * as Screens from "app/screens"


export type OnboardStackParamList = {
    Onboarding: undefined
    Welcome: undefined
};

const OnboardStack = createNativeStackNavigator<OnboardStackParamList>();

export const OnboardNavigator = observer(function OnboardStackNavigator() {
    const [hasCompletedOnboarding, setIsOnboardingComplete] = React.useState<boolean>(false);
    React.useEffect(() => {
        const checkOnboardingStatus = async () => {
            const hasCompletedOnboarding = await AsyncStorage.getItem('hasCompletedOnboarding');
            if (hasCompletedOnboarding && hasCompletedOnboarding === 'true') {
                setIsOnboardingComplete(true);
            }
        };
        checkOnboardingStatus();
    }, []);


    return (
        <OnboardStack.Navigator initialRouteName={hasCompletedOnboarding ? 'Welcome':'Onboarding'} screenOptions={{ headerShown: false }}>
            <OnboardStack.Screen name="Onboarding" component={Screens.OnboardingSwiper} />
            <OnboardStack.Screen name="Welcome" component={Screens.WelcomeScreen} />
        </OnboardStack.Navigator>
    );
});

