/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {
  Box,
  Heading,
  // Image,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  // Container,
  Img,
} from '@chakra-ui/react';

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// images
import Ice from '../Assets/Performnace_Section/final-ice.png';

import Rain from '../Assets/Performnace_Section/final-rain.png';

import Sand from '../Assets/Performnace_Section/final-sand.png';

// slider packges
import Slider from 'react-slick';

const PerformanceSection = () => {
  return (
    <>
      <Stack
        display={{ xl: 'flex' }}
        paddingX={['5%']}
        paddingY={['.25rem', '.75rem']}
      >
        <Performace_Section_Headline />
        <PerformanceCarousel />
      </Stack>
    </>
  );
};

export default PerformanceSection;

const Performace_Section_Headline = () => {
  return (
    <>
      <Heading>
        <Text
          fontWeight={'500'}
          fontSize={['30px', '32px', '36px', '40px']}
          textShadow={'1.728px 1.728px 0px rgba(146, 200, 62, 0.5)'}
        >
          A motor that's designed to perform
        </Text>
      </Heading>
    </>
  );
};

const PerformanceCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '.5rem',
          position: 'absolute',
          top: '92%',
          bottom: '2%',
          left: '45%',
          width: '100px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  const [slider, setSlider] = React.useState(<Slider />);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a

  const CarouselComponent = [
    {
      title: 'Design Projects 1',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: Ice,
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: Rain,
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: Sand,
    },
  ];

  return (
    <>
      <Box
        border={'1px solid'}
        position={'relative'}
        minH={'480px'}
        width={'full'}
        overflow={'hidden'}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* toggle button */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <MdKeyboardArrowLeft />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <MdKeyboardArrowRight />
        </IconButton>

        <Slider {...settings} ref={slider => setSlider(slider)}>
          {CarouselComponent.map((items, index) => {
            return (
              <div key={index}>
                <Img src={items.image} boxSize={'100%'} objectFit={'cover'} />
                <Text>{items.title}</Text>
              </div>
            );
          })}
        </Slider>
      </Box>
    </>
  );
};
