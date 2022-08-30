import { mode } from "@chakra-ui/theme-tools"

const Button = {
    variants: {
        coffeePrimary: (props) => ({
            _focus: {
                ring: 2,
                ringColor: 'brand.500',
            },
            color: mode('white', 'coffee.900')(props),
            backgroundColor: mode('coffee.500', 'coffee.100')(props),

            _hover: {
                backgroundColor: mode('coffee.600', 'coffee.200')(props),
            },

            _active: {
                backgroundColor: mode('coffee.700', 'coffee.300`')(props)
            }
        }),
        coffeeSecondary: (props) => ({

        })
    }
}

const Heading = {
    baseStyle: (props) =>  ({
        color: mode('coffee.500', 'coffee.300')(props),  
    })
}

const Link = {
    baseStyle: (props) =>  ({
        color: mode('coffee.500', 'coffee.300')(props),  
    })
}

const components = {
    Button,
    Link,
    Heading
}

export default components

