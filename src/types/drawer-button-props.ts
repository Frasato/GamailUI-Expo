import { PressableProps } from "react-native"
import { IconNameProps } from "./icon-name-props"

export type DrawerButtonProps = PressableProps & {
    title: string,
    isFocused?: boolean,
    isDivider?: boolean,
    iconName: IconNameProps,
    notifications?: number
}