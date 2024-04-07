import {
  TouchableOpacity,
  View,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
  StyleSheet,Text
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

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
  backgroundColor?:string,
  width?:number
}

export const Button = ({ title, onPress, style, textStyle, fontSize=16, marginBottom, 
  disabled,borderRadius, contentStyle, height = 40,backgroundColor,width=100,gradient}: ButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} >
      <LinearGradient  colors={gradient ? ["#F06100", "#F04900", "#F03000", "#F00030", "#F0006D"] : [backgroundColor || 'transparent', backgroundColor || 'transparent']} style={{
        ...styles.container,
        height,
        borderRadius,
        width:`${width}%`
      }}>
       {
        title && <Text style={{
          ...styles.text,
          fontSize,
          ...textStyle
        }}>{title}</Text>
       }
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    
  }
})