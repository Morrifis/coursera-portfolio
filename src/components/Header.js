import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const SocialLink = (props) => {
  return (
    <a href={props.href} target="_blank">
      <FontAwesomeIcon icon={props.icon} size="1x" />
    </a>
  )
}

const ProjectLink = (props) => {
  return (
    <a href={`#${props.anchor}`} onClick={props.handleClick(props.anchor)}>
      {props.name}
    </a>
  )
}

const Header = () => {

  const [translateY, setTranslateY] = useState(0)
  const scrollingDirection = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingDirection.current < window.scrollY) {
        setTranslateY(-200)
      } else {
        setTranslateY(0)
      }

      scrollingDirection.current = window.scrollY

    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${translateY}px)`}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="999"
    >

      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >

          <nav>
            <HStack>
              {socials.map((link) =>
                <Box key={link.url} w="25px">
                  <SocialLink icon={link.icon} href={link.url} />
                </Box>
              )}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <ProjectLink key="projects" name="Projects" anchor="projects" handleClick={handleClick} />
              <ProjectLink key="contact-me" name="Contact Me" anchor="contact-me" handleClick={handleClick} />
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
