import {
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import NewNoteDrawer from "../components/NewNoteDrawer";


const Dashboard = () => {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Navbar btnRef={btnRef} onOpen={onOpen} />
            <NewNoteDrawer 
                isOpen={isOpen} 
                onClose={onClose} 
                btnRef={btnRef}
            />
        </>
    );
}
 
export default Dashboard;