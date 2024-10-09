import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                minHeight: 74,
            },
            tabBarItemStyle: {
                paddingBottom: 34,
                paddingTop: 14
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.orange[500],
            tabBarInactiveTintColor: colors.gray[400],
        }}>
            <Tabs.Screen name="index"/>
            <Tabs.Screen name="chat"/>
            <Tabs.Screen name="meeting"/>
        </Tabs>
    )
}