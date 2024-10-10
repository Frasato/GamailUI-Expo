import { DrawerContent } from "@/components/drawer-content";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout(){
    return(
        <Drawer 
        defaultStatus="open"
        screenOptions={{
            headerShown: false,
            drawerStyle: {
                width: "75%"
            }
        }}
        drawerContent={(props) => <DrawerContent {...props}/>}
        >
            <Drawer.Screen name="(tabs)" options={{title: ""}}/>
        </Drawer>
    )
}