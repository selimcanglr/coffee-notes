import { Box, Button, ButtonGroup, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
    return (
        <Flex minWidth='max-content' align='center' gap='2' p='6'>
            <Box color='coffee.400'>
                <Link as={RouterLink} to='/' style={{textDecoration: 'none'}}>
                    <Heading size='lg'>Coffee Notes</Heading>
                </Link>
            </Box>
            <Spacer />
            <ColorModeSwitcher></ColorModeSwitcher>
            <ButtonGroup>
                <Link as={RouterLink} to='/signup'>
                    <Button variant='coffeePrimary'>Sign Up</Button>
                </Link>
                <Link as={RouterLink} to='/login'>
                    <Button variant='coffeePrimary'>Log In</Button>
                </Link>
            </ButtonGroup>

        </Flex>
    );
}
 
export default Navbar;