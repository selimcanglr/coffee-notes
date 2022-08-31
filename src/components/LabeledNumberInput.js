import {
    FormControl, FormHelperText, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
    NumberInputField, NumberInputStepper
} from "@chakra-ui/react";
import { useState } from "react";

const LabeledNumberInput = ({ label, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER, helper, state, setState }) => {

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <NumberInput 
                min={min} 
                max={max}
                onChange={(valueString) => setState(valueString)}
                value={state}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <FormHelperText>{helper}</FormHelperText>
        </FormControl>
    );
}
 
export default LabeledNumberInput;