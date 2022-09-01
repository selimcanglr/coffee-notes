import {
    Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay
} from "@chakra-ui/react"
import { useState } from "react"
import CoffeeTastingForm from "./CoffeeTastingForm"

const defaultReview = {
    title: '',
    beanType: '',
    roastType: '',
    coffeeWeight: '',
    tastingNotes: [],
    origin: '',
    groundLevel: '',
    brewMethod: '',
    rating: '',
}

const requiredInputs = ['title', 'beanType', 'roastType']

const NewNoteDrawer = ({ isOpen, onClose, btnRef }) => {
    const [review, setReview] = useState(defaultReview)
    const [state, setState] = useState('initial')

    const invalidInputs  = Object.keys(review).filter((key) => {
        return review[key].length === 0 && requiredInputs.includes(key)
    })

    const handleCancel = () => {
        setState('initial')
        setReview(defaultReview)
        onClose()
    }

    const handleSave = async () => {
        if (invalidInputs.length !== 0) {
            setState('invalid')
            console.log(invalidInputs)
            return
        }
        
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/addNote', {
            method: 'POST',
            body: review,
        })
        onClose()
    }

    return (
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
                    <CoffeeTastingForm 
                        review={review} 
                        setReview={setReview} 
                        state={state}
                    />
                </DrawerBody>
                <DrawerFooter>
                    <Button variant='outline' colorScheme='red' mr={3} onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button colorScheme='coffee' onClick={handleSave}>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        
    );
}
 
export default NewNoteDrawer;