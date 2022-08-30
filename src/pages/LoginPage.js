import {
    ArrowBackIcon
} from '@chakra-ui/icons';
import {
    Box, Button, Center, Flex, FormControl,
    FormLabel, Heading, Input, Link, Spacer
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

const LoginPage = () => {
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
                                <Heading size='lg'>Log In</Heading>
                                <FormControl>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email'/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password'/>
                                </FormControl>
                            </Flex>
                            <Flex direction='column' align='center' justify='center' gap='3'>
                                <Button variant='coffeePrimary'>Log In</Button>
                                <Box>OR</Box>
                                <Box>
                                    <Link as={RouterLink} to='/signup'>sign up</Link> if you don't have an account
                                </Box>
                            </Flex>
                        </Flex>
                    </FormControl>
                </Box>
            </Center>
        </>
    );
}
 
export default LoginPage;