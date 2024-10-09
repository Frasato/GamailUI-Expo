import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text} from "react-native";

export function FloatButton(){
    return(
        <Pressable className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-4 right-4 flex-row gap-1 items-center">
            <MaterialIcons name="edit" size={22} color={colors.orange[500]}/>
            <Text className="font-subtitle text-orange-500">Write</Text>
        </Pressable>
    )
}