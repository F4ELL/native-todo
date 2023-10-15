import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import PlusSvg from '../../assets/plus.svg'
import { styles } from "./styles";

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
    >
      <PlusSvg />
    </TouchableOpacity>
  )
}