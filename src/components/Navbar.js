import { AddIcon } from "@chakra-ui/icons";
import {
    Box, Button, Divider, Flex, Heading, Link, Spacer
} from "@chakra-ui/react";
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Navbar = ({ btnRef, onOpen  }) => {
    return (
        <Flex minWidth='max-content' align='center' gap='4' p='6'>
            <Box color='coffee.400'>
                <Link as={RouterLink} to='/' style={{textDecoration: 'none'}}>
                    <Heading size='lg'>Coffee Notes</Heading>
                </Link>
            </Box>
            <Spacer />
            <Flex align='center' gap='6' >
                {
                    btnRef && onOpen &&
                    <Button
                        ref={btnRef}
                        leftIcon={<AddIcon />}
                        variant='coffeePrimary' 
                        onClick={onOpen}
                        size='md'
                    >
                            New Review
                    </Button>
                }
                <Link 
                    variant='navLink'
                    as={NavLink} 
                    to='/dashboard'
                >
                    My Reviews
                </Link>
                <Link
                    variant='navLink'
                    as={NavLink} 
                    to='/profile'
                >
                    Profile
                </Link>
                <ColorModeSwitcher></ColorModeSwitcher>

            </Flex>
        </Flex>
    );
}
 
export default Navbar;