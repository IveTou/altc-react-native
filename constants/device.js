import { Dimensions } from "react-native";
const { height, width, scale, fontScale } = Dimensions.get("window");

const screenSize = (width) => {
  if(width >= 1920) {
    return 'xl'
  } else if(width >= 1280) {
    return 'lg'
  } else if (width > 960) {
    return 'md';
  } else if (width > 600) {
    return 'sm';
  } else {
    return 'xs';
  }
}

export default {
  height,
  width,
  scale,
  fontScale,
  mode: height > width ? 'portrait' : 'landscape',
  size: screenSize(width),
}