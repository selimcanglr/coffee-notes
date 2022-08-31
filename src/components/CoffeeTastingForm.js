import {
    Button, FormControl, FormHelperText, FormLabel, HStack, Input, InputGroup, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
    NumberInputField, NumberInputStepper, Radio, RadioGroup, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tag, TagLabel, Tooltip, VStack, Wrap
} from "@chakra-ui/react";
import { useState } from "react";

const beanTypes = ['Arabica', 'Robusta']
const roastTypes = ['Light', 'Medium', 'Dark']

const defaultReview = {
    title: '',
    beanType: '',
    roastType: '',
    coffeeWeight: '',
    tastingNotes: [],
    origin: '',
    groundLevel: 18,
    brewMethod: '',
    rating: 3,
}

const CoffeeTastingForm = () => {
    const [review, setReview] = useState(defaultReview)
    const [currentNote, setCurrentNote] = useState('')
    const [showSliderTooltip, setShowSliderTooltip] = useState(0)

    const beanRadioOptions = beanTypes.map((option, index) => {
        return (
            <Radio value={option} key={index}>{option}</Radio>
        )
    })

    const roastRadioOptions = roastTypes.map((option, index) => {
        return (
            <Radio value={option} key={index}>{option}</Radio>
        )
    })

    const tastingNoteTags = review.tastingNotes.map(note => {
        return (
            <Tag size='sm' key={note} variant='outline' colorScheme='coffee'>
                <TagLabel>{note}</TagLabel>
            </Tag>
        )
    })

    const setTastingNotes = (newNote) => {
        setReview({
            ...review,
            tastingNotes: [...review.tastingNotes, newNote]
        })
    }

    const setTitle = (newTitle) => {
        setReview({
            ...review,
            title: newTitle
        })
    }

    const setBeanType = (newBeanType) => {
        setReview({
            ...review,
            beanType: newBeanType
        })
    }

    const setRoastType = (newRoastType) => {
        setReview({
            ...review,
            roastType: newRoastType
        })
    }

    const setCoffeeWeight= (newCoffeeWeight) => {
        setReview({
            ...review,
            coffeeWeight: newCoffeeWeight
        })
    }

    const handleAddTastingNote = (e) => {
        if (currentNote) {
            setCurrentNote('')
            setTastingNotes(currentNote)
        }
    }

    const setOrigin = (newOrigin) => {
        setReview({
            ...review,
            origin: newOrigin
        })
    }

    const setGroundLevel = (sliderValue) => {
        setReview({
            ...review,
            groundLevel: sliderValue
        })
    }

    const setBrewMethod = (newBrewMethod) => {
        setReview({
            ...review,
            brewMethod: newBrewMethod
        })
    }
    
    const setRating = (newRating) => [
        setReview({
            ...review,
            rating: newRating
        })
    ]

    return (
        <VStack align='flex-start' gap='4'>
            <FormControl isRequired={true}>
                <FormLabel>Title</FormLabel>
                <InputGroup>
                    <Input 
                        type='text' 
                        placeholder='My notes on brewing V60' 
                        value={review.title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl isRequired={true} as='fieldset'>
                <FormLabel as='legend'>Bean type</FormLabel>
                <RadioGroup 
                    value={review.beanType} 
                    onChange={setBeanType}
                >
                    <HStack>
                        {beanRadioOptions}
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired={true} as='fieldset'>
                <FormLabel as='legend'>Roast type</FormLabel>
                <RadioGroup 
                    value={review.roastType} 
                    onChange={setRoastType}
                >
                    <HStack>
                        {roastRadioOptions}
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Origin country</FormLabel>
                <InputGroup>
                    <Input 
                        type='text' 
                        placeholder='Kenya' 
                        value={review.origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Coffee weight (g)</FormLabel>
                <NumberInput 
                    min={1} 
                    onChange={setCoffeeWeight}
                    value={review.coffeeWeight}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <FormHelperText>The amount of coffee you have used</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Ground level</FormLabel>
                <Slider
                        id='slider'
                        min={0}
                        max={36}
                        colorScheme='coffee'
                        onChange={setGroundLevel}
                        onMouseEnter={() => setShowSliderTooltip(0)}
                        onMouseLeave={() => setShowSliderTooltip(-1)}
                    >
                    <SliderMark value={3} mt='2' ml='-2.5' fontSize='sm'>
                        Fine
                    </SliderMark>
                    <SliderMark value={30} mt='2' ml='-2.5' fontSize='sm'>
                        Coarse
                    </SliderMark>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                        hasArrow
                        bg='coffee.500'
                        color='white'
                        placement='top'
                        isOpen={showSliderTooltip === 0}
                        label={`${review.groundLevel}`}
                    >
                        <SliderThumb />
                    </Tooltip>
                </Slider>
            </FormControl>
            <FormControl>
                <FormLabel>Brew method</FormLabel>
                <InputGroup>
                    <Input 
                        type='text' 
                        placeholder='French Press, Aeropress, Pour over, ...' 
                        value={review.brewMethod}
                        onChange={(e) => setBrewMethod(e.target.value)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Tasting notes</FormLabel>
                <InputGroup>
                    <Input 
                        type='text' 
                        placeholder='Nutty' 
                        pr='4rem'
                        value={currentNote}
                        onChange={(e) => setCurrentNote(e.target.value)}
                    />
                    <InputRightElement w='4rem'>
                    <Button onClick={handleAddTastingNote} size='sm' h='1.75rem'>
                        Add
                    </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            {tastingNoteTags && <Wrap spacing={3}>
                {tastingNoteTags}
            </Wrap>}
            
            <FormControl>
                <FormLabel>Overall Rating</FormLabel>
                <Slider
                    id='slider'
                    min={0}
                    max={5}
                    colorScheme='coffee'
                    onChange={setRating}
                    onMouseEnter={() => setShowSliderTooltip(1)}
                    onMouseLeave={() => setShowSliderTooltip(-1)}
                >
                    <SliderMark value={0} mt='2' ml='-1' fontSize='sm'>
                        0
                    </SliderMark>
                    <SliderMark value={1} mt='2' ml='-1' fontSize='sm'>
                        1
                    </SliderMark>
                    <SliderMark value={2} mt='2' ml='-1' fontSize='sm'>
                        2
                    </SliderMark>
                    <SliderMark value={3} mt='2' ml='-1' fontSize='sm'>
                        3
                    </SliderMark>
                    <SliderMark value={4} mt='2' ml='-1' fontSize='sm'>
                        4
                    </SliderMark>
                    <SliderMark value={5} mt='2' ml='-1' fontSize='sm'>
                        5
                    </SliderMark>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                        hasArrow
                        bg='coffee.500'
                        color='white'
                        placement='top'
                        isOpen={showSliderTooltip === 1}
                        label={`${review.rating}`}
                    >
                        <SliderThumb />
                    </Tooltip>
                </Slider>
            </FormControl>
        </VStack>
    );
}
 
export default CoffeeTastingForm;