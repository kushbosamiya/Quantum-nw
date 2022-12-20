import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import RenderImage from '../Assets/Herosection_Assets/px-conversions/px-0001.webp';

const HeroSection = () => {
  return (
    <>
      <HeroContainer />
    </>
  );
};

export default HeroSection;

const HeroContainer = () => {
  return (
    <>
      <Flex
        paddingX={['5%']}
        paddingY={['.25rem', '.75rem']}
        justifyContent={'center'}
        alignItems={'center'}
        minH={['320px', '180px']}
      >
        <Image
          src={RenderImage}
          boxSize={['100%', '90%', '75%']}
          objectFit={'contain'}
        />
      </Flex>
    </>
  );
};
