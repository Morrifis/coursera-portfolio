import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mykhailo!";
const bio1 = "A Full-Stack developer";
const bio2 = "specialized in React";
const devName = "Mykhailo"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size='2xl' name={devName} src='https://i.pravatar.cc/150?img=11' />
    <VStack spacing={8}>
      <Text fontSize='lg'>{greeting}</Text>
      <Box m={5}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
