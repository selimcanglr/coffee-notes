import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Box, Button, Center, Flex, FormControl,
    FormHelperText, FormLabel, Heading, Input,
    Link,
    Spacer
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";


const SignupPage = () => {
    return (
        <>
            <Flex minWidth='max-content' align='center' gap='2' p='6'>
                <Link as={RouterLink} to='/'>
                    <Button leftIcon={<ArrowBackIcon />} variant='outline'>Back</Button>
                </Link>
                <Spacer />
                <ColorModeSwitcher></ColorModeSwitcher>
            </Flex>
            <Center>
                <Box boxShadow='2xl' p='16' rounded='md'>
                    <FormControl>
                        <Flex direction='column' gap='8'>
                            <Flex  direction='column' gap='4' minWidth='max-content' align='center' justify='center'>
                                <Heading size='lg'>Sign Up</Heading>
                                <FormControl isRequired>
                                    <FormLabel>Full name</FormLabel>
                                    <Input type='text'/>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email'/>
                                    <FormHelperText>We will never share your email.</FormHelperText>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password'/>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Repeat password</FormLabel>
                                    <Input type='password'/>
                                </FormControl>
                            </Flex>
                            <Flex direction='column' align='center' justify='center' gap='3'>
                                <Button variant='coffeePrimary'>Sign Up</Button>
                                <Box>OR</Box>
                                <Box>
                                    <Link as={RouterLink} to='/login'>log in</Link> if you already have an account
                                </Box>
                            </Flex>
                        </Flex>
                    </FormControl>
                </Box>
            </Center>
        </>
    );
}
 
export default SignupPage;