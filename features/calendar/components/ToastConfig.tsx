import React from "react";
import { BaseToast, BaseToastProps } from "react-native-toast-message";

interface CustomToastProps extends BaseToastProps {
  text1?: string;
}

export const toastConfig = {
    Plain: ({ text2 }: CustomToastProps) => (
        <BaseToast
            style={{ borderLeftColor: "#841584", backgroundColor: "#FFFFFF" }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text2Style={{
                fontSize: 15,
                fontWeight: "400",
                color: "#000000"
            }}
            text2NumberOfLines={2}
            text2={text2}
        />
    )
};