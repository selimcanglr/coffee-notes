import { FormControl, FormLabel, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const LabeledRadio = ({ direction='row', label, radioOptions, isRequired, defaultValue }) => {
    const radioList = radioOptions.map((option, index) => {
        return (
            <Radio value={option} key={index}>{option}</Radio>
        )
    })

    const defaultOption = defaultValue ? defaultValue : radioOptions[0]
    
    return (
        <FormControl isRequired={isRequired} as='fieldset'>
            <FormLabel as='legend'>{label}</FormLabel>
            <RadioGroup defaultValue={defaultOption}>
                <Stack direction={direction}>
                    {radioList}
                </Stack>
            </RadioGroup>
        </FormControl>
    );
}
 
export default LabeledRadio;