import {
  TouchableOpacity,
  View,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
  StyleSheet, Text
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { colors, fonts, icons } from "../../theme";
interface ButtonProps {
  title?: string,
  onPress?: () => void,
  style?: ViewStyle,
  textStyle?: TextStyle,
  contentStyle?: ViewStyle,
  disabled?: boolean,
  borderRadius?: number,
  height?: number,
  fontSize?: number,
  marginBottom?: number,
  gradient?: boolean,
  backgroundColor?: string,
  width?: number,
  icon?: ImageSourcePropType,
}

export const Button = ({ title, onPress, style, textStyle, fontSize = 16, marginBottom, icon,
  disabled, borderRadius, contentStyle, height = 40, backgroundColor, width = 100, gradient }: ButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} >
      <LinearGradient colors={gradient ? ["#F06100", "#F04900", "#F03000", "#F00030", "#F0006D"] : [backgroundColor || 'transparent', backgroundColor || 'transparent']} style={{
        ...styles.container,
        height,
        borderRadius,
        width: `${width}%`,
        ...style,
        marginBottom
      }}>
        <View style={{
          ...styles.contentView,
          ...contentStyle
        }}>
          {
            icon && <Image source={icons.icon_google} style={styles.iconStyle} />
          }
          {
            title && <Text style={{
              ...styles.text,
              fontSize,
              ...textStyle
            }}>{title}</Text>
          }
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.white,
    fontFamily: fonts.nunito_bold
  },
  iconStyle: {
    height: 24,
    width: 24,
    marginRight: 12
  },
  contentView: {
    flexDirection: "row",
    alignItems: "center"
  }
})