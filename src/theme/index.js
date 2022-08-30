import { extendTheme } from '@chakra-ui/react'

import components from './components/components'
import colors from './foundations/colors'
import styles from './styles'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = {
    config,
    colors,
    styles,
    components
}

export default extendTheme(theme)