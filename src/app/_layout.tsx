import "@/styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from "@expo-google-fonts/roboto";
import { Loading } from "@/components/loading";

export default function Layout(){
    
    const [fonstLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    if(!fonstLoaded){
        return <Loading/>
    }
    
    return(
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar style="light"/>
            <Slot />
        </GestureHandlerRootView>
    );
}