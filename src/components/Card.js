import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (<VStack>
    <Box overflow='hidden' borderRadius='lg' bg='white' color="black" m={5} boxSize='sm'>
      <Image src={imageSrc} alt={title} />
      <Box h="100px" p={ 4}>
        <Heading as='h5' size='sm'>{title}</Heading>
        <Text mt={2} mb={ 2} noOfLines={2} overflow='hidden' fontSize='sm' color="gray">{description}</Text>
        <Link  fontSize='sm' href='/home'>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
      </Box>




    </Box>
  </VStack>);
};

export default Card;
