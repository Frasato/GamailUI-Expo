import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import clsx from "clsx";
import { DrawerButtonProps } from "@/types/drawer-button-props";

export function DrawerButton({...rest}: DrawerButtonProps){
    const isDividir = rest.isDivider;
    const isFocused = rest.isFocused;
    
    return (
        <Pressable className={clsx("py-2 w-full", {
            "border-b ml-10 border-gray-500": isDividir
        }
        )}
        {...rest}>
            <View className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
                "-ml-14": isDividir
            })}>
                <MaterialIcons name={rest.iconName} size={20} color={isFocused? colors.orange[300] : colors.gray[400]} />
                <Text className={clsx("text-white font-subtitle text-base flex-1", {
                    "text-orange-300": isFocused
                })}>{rest.title}</Text>
                <Text className={clsx("text-gray-400 text-sm font-body", {
                    "text-orange-300": isFocused
                })}>{rest.notifications}</Text>
            </View>
        </Pressable>
    )
}