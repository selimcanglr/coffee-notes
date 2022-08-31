import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

const LabeledInput = ( { isRequired=false, label, type='text', helperText, placeholder } ) => {
    return (
    <FormControl isRequired={isRequired}>
        <FormLabel>{label}</FormLabel>
        <Input type={type} placeholder={placeholder}/>
        {helperText && <FormHelperText>{helperText}</FormHelperText>  }
        
    </FormControl>
    );
}
 
export default LabeledInput;