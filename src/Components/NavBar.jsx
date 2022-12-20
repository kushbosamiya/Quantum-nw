import React from 'react';
import {
  Image,
  Flex,
  Text,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react';

// logo
import Logo from '../Assets/NavBar_Assets/new-log-4-11-22.png';
import MobileDeviceLogo from '../Assets/NavBar_Assets/new-log-4-11.png';

// imprting context
// import { ThemeContext } from '../context/ThemeContext';

// icons
import { BiMenu } from 'react-icons/bi';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { FiHelpCircle } from 'react-icons/fi';
import { SiAboutdotme } from 'react-icons/si';
import { RiSettings6Line } from 'react-icons/ri';
import { BsBoxSeam } from 'react-icons/bs';

import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

const NavBar = () => {
  return (
    <>
      <NavBarContainer />
    </>
  );
};

export default NavBar;

const NavBarContainer = () => {
  // const data = useContext(ThemeContext);
  // context aavi gyu chhe bhy

  return (
    <Flex
      h={['10vh']}
      // borderBottom="1px solid red"
      alignItems={['center']}
      justifyContent={['space-between']}
      paddingX={['5%']}
      paddingY={['2%', '1%']}
    >
      <NavbarLogo />
      <HamburgerMenu />
    </Flex>
  );
};

// logo
const NavbarLogo = () => {
  return (
    <>
      <Flex flexBasis={['45%', '40%', '30%', '20%']} justifyContent={['start']}>
        <Image
          display={['none', 'block']}
          boxSize={['0%', '75%', '80%']}
          src={Logo}
          fallbackSrc="https://dummyimage.com/900x300/E2E2E2/aaa
          "
        />
        <Image
          boxSize={['100%', '90%']}
          display={['block', 'none']}
          src={MobileDeviceLogo}
          fallbackSrc="https://dummyimage.com/900x300/E2E2E2/aaa
          "
        />
      </Flex>
    </>
  );
};

// hamburger menu
const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        _active={{
          bg: 'none',
          outline: 'none',
        }}
        variant="ghost"
        _hover={{
          bg: 'none',
        }}
        ref={btnRef}
        onClick={onOpen}
      >
        <BiMenu size={30} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#121212">
          <DrawerCloseButton
            size={30}
            marginY={'2rem'}
            padding={'1rem'}
            _hover={{ bg: 'none' }}
            color="white"
          />
          {/* <DrawerHeader>header</DrawerHeader> */}

          <DrawerBody
            display={'flex'}
            flexDir={'column'}
            justifyContent={'space-around'}
            h={'45%'}
            color={'white'}
            pos={'absolute'}
            top={'25%'}
            width="100%"
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={'1rem'}
              padding={'1vmax'}
            >
              <BsBoxSeam size={24} />
              <Text
                fontSize={['md', 'lg']}
                _hover={{ color: '#16AA51', cursor: 'pointer' }}
              >
                Products
              </Text>
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={'1rem'}
              padding={'1vmax'}
            >
              <RiSettings6Line size={24} />
              <Text
                fontSize={['md', 'lg']}
                _hover={{ color: '#16AA51', cursor: 'pointer' }}
              >
                Performance
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              gap={'1rem'}
              padding={'1vmax'}
            >
              <HiOutlineNewspaper size={24} />
              <Text
                fontSize={['md', 'lg']}
                _hover={{ color: '#16AA51', cursor: 'pointer' }}
              >
                Blogs
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              gap={'1rem'}
              padding={'1vmax'}
            >
              <SiAboutdotme size={24} />
              <Text
                fontSize={['md', 'lg']}
                _hover={{ color: '#16AA51', cursor: 'pointer' }}
              >
                About Us
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              gap={'1rem'}
              padding={'1vmax'}
            >
              <FiHelpCircle size={24} />
              <Text
                fontSize={['md', 'lg']}
                _hover={{ color: '#16AA51', cursor: 'pointer' }}
              >
                Contact
              </Text>
            </Box>
          </DrawerBody>

          {/* <DrawerFooter>footer</DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};
