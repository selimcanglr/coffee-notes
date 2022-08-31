import { FormControl, FormLabel, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const LabeledRadio = ({ direction='row', label, radioOptions, isRequired, state, setState }) => {
    const radioList = radioOptions.map((option, index) => {
        return (
            <Radio value={option} key={index}>{option}</Radio>
        )
    })

    return (
        <FormControl isRequired={isRequired} as='fieldset'>
            <FormLabel as='legend'>{label}</FormLabel>
            <RadioGroup value={state} onChange={setState}>
                <Stack direction={direction}>
                    {radioList}
                </Stack>
            </RadioGroup>
        </FormControl>
    );
}
 
export default LabeledRadio;