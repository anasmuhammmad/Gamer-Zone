import { HStack,Switch, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
   <HStack>
        <Switch colorScheme="green" isChecked={colorMode==='dark'} onChange={toggleColorMode} />
        <text>Dark Mode</text>
   </HStack>
  )
}

export default ColorModeSwitch