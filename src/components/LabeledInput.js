import { FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const LabeledInput = ( { isRequired=false, type='text', label, helperText, placeholder, inputRightElementChild, state, setState } ) => {
    return (
        <FormControl isRequired={isRequired}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <Input 
                    type={type} 
                    placeholder={placeholder} 
                    pr={inputRightElementChild ? '4rem' : ''}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                {helperText && <FormHelperText>{helperText}</FormHelperText>  }
                {inputRightElementChild && <InputRightElement w='4rem'>{inputRightElementChild}</InputRightElement>}
            </InputGroup>
        </FormControl>
    );
}
 
export default LabeledInput;