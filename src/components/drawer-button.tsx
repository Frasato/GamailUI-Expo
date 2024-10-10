import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import clsx from "clsx";

export function DrawerButton(){
    const isDividir = true;
    const isFocused = true;
    
    return (
        <Pressable className={clsx("py-2 w-full", {
            "border-b ml-10 border-gray-500": isDividir
        }
        )}>
            <View className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
                "-ml-14": isDividir
            })}>
                <MaterialIcons name="email" size={20} color={isFocused? colors.orange[300] : colors.gray[400]} />
                <Text className={clsx("text-white font-subtitle text-base flex-1", {
                    "text-orange-300": isFocused
                })}>All E-mails</Text>
                <Text className={clsx("text-gray-400 text-sm font-body", {
                    "text-orange-300": isFocused
                })}>5</Text>
            </View>
        </Pressable>
    )
}