import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";


export const styles = (dimensions:any)=>{
  return StyleSheet.create({
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small / 1.25,
      justifyContent: "center",
      alignItems: "center",
    },
    btnImg: {
      width: dimensions,
      height: dimensions,
      borderRadius: SIZES.small / 1.25,
    },
  });
}
