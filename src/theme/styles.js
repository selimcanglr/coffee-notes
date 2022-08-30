import { mode } from "@chakra-ui/theme-tools"
import colors from './foundations/colors'

const styles = {
    global: props => ({
      // Optionally set global CSS styles
      body: {
        color: mode(
          colors.primaryFontColor.lightMode,
          colors.primaryFontColor.darkMode
        )(props),
      },
    }),
  }

  export default styles