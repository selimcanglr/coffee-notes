import { AddIcon } from "@chakra-ui/icons";
import {
    Button,
    Drawer,
    DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";
import CoffeeTastingForm from "../components/CoffeeTastingForm";

const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const handleSave = () => {

        onClose()
    }

    return (
        <>
            <Button 
                ref={btnRef}
                leftIcon={<AddIcon />}
                variant='coffeePrimary' 
                onClick={onOpen}
            >
                    New Note
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Add a coffee tasting note</DrawerHeader>

                    <DrawerBody>
                        <CoffeeTastingForm />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' colorScheme='red' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='coffee' onClick={handleSave}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>


            </Drawer>
        </>
    );
}
 
export default Dashboard;