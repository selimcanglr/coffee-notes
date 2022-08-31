import {
    NumberDecrementStepper, NumberIncrementStepper, NumberInput,
    NumberInputField,
    NumberInputStepper, VStack
} from "@chakra-ui/react";
import LabeledInput from "./LabeledInput";
import LabeledRadio from "./LabeledRadio";

const CoffeeTastingForm = () => {
    const beanTypes = ['Arabica', 'Robusta']
    const roastTypes = ['Light', 'Medium', 'Dark']

    return (
        <VStack align='flex-start' gap='4'>
            <LabeledInput isRequired={true} label='Title' placeholder='My notes on brewing a light roast'/>
            <LabeledRadio isRequired={true} direction='row' label='Bean type' radioOptions={beanTypes} />
            <LabeledRadio isRequired={true} direction='row' label='Roast type' radioOptions={roastTypes}></LabeledRadio>
            <NumberInput defaultValue={15} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </VStack>
    );
}
 
export default CoffeeTastingForm;