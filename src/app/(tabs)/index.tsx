import { Avatar } from "@/components/avatar";
import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";
import React from "react";
import { View } from "react-native";

export default function Home(){
    return(
        <View className="flex-1 bg-gray-900 pt-14 p-4">
            <Input>
                <MenuButton />
                <Input.Field placeholder="Search on e-mail" />
                <Avatar source={{uri: "https://github.com/Frasato.png"}} size="small"/>
            </Input>
        </View>
    );
}