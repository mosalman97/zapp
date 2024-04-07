import {
  TouchableOpacity,
  TextStyle,
  StyleSheet, Text
} from "react-native";
import { colors, fonts } from "../../theme";
interface ButtonPlainProps {
  title?: string,
  onPress?: () => void,
  style?: TextStyle,
  fontSize?: number,
  marginBottom?: number,
  color?: string,
  textAlign:TextStyle["textAlign"]
}

export const ButtonPlain = ({ title, onPress, style, fontSize = 16, marginBottom,textAlign="center", color = colors.black }: ButtonPlainProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{
        ...style,
        marginBottom,
        color,
        fontSize,
        textAlign
      }}>{title}</Text>
    </TouchableOpacity>
  )
}
