import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import TrashSvg from '../../assets/trash.svg'

export function DeleteTask({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
    >
      <TrashSvg />
    </TouchableOpacity>
  )
}