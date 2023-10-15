import { Pressable, PressableProps, View } from "react-native";

import CheckSvg from '../../assets/check.svg'
import { styles } from "./styles";
import { useState } from "react";

type Props = PressableProps & {
  checked: boolean
}

export function Checkbox({ checked, ...rest }: Props) {
  return (
    <Pressable
      style={styles.container}
      {...rest}
    >
      <View style={
        [
          styles.base, 
          checked && styles.check
        ]
      }>
        {
          checked && 
          <CheckSvg />
        }
      </View>
    </Pressable>
  )
}