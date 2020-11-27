import * as React from "react";
import ControlledPasswordInput from "./ControlledPasswordInput";
import PasswordInput from "./PasswordInput";
import { TextInputSharedProps } from "./props";
import { ForwardRefReturn, CarbonInputSize } from "../../../typings/shared";

export interface TextInputProps extends TextInputSharedProps {
    inline?: boolean,
    size?: Extract<CarbonInputSize, "sm" | "xl">,
    warn?: boolean,
    warnText?: React.ReactNode,
}

interface TextInputFC extends ForwardRefReturn<HTMLInputElement, TextInputProps> {
    readonly ControlledPasswordInput: typeof ControlledPasswordInput,
    readonly PasswordInput: typeof PasswordInput,
}

declare const TextInput: TextInputFC;

export default TextInput;
