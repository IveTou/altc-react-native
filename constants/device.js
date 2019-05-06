import { Dimensions } from "react-native";
const { height, width, scale, fontScale } = Dimensions.get("window");

const screenSize = (width) => {
  if(width >= 1280) {
    return { name: 'xl', value: 4 };
  } else if(width >= 960) {
    return { name: 'lg', value: 3 };
  } else if (width > 600) {
    return { name: 'md', value: 2 };
  } else if (width > 300) {
    return { name: 'sm', value: 1 };
  } else {
    return { name: 'xs', value: 0 };
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