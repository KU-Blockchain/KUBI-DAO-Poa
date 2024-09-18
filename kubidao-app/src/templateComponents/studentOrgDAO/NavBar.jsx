import React from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import LoginButton from "@/components/LoginButton";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const router = useRouter();
  const userDAO = "KUBI";
  return (
    <Box bg="black" p={2.5} alignItems={"center"} >
      <Flex
        alignItems="center"
        h="70px"
        maxW="100%"
        justifyContent="space-between"
      >
        <Box   h="100%" w="12%" pb={2} pl={10} mr={{ base: "4", md: "14" }}>
          <Link as={NextLink} href={`/home`} passHref>
            <Image
              src="/images/kubi_white_logo.png"
              alt="Your Logo"
              height="113%"
              width="auto"
              objectFit="contain"
            />
          </Link>
        </Box>
        
        <Flex
          justifyContent="space-between"
          flexGrow={1}
          ml={4}
          mr={4}
          alignItems="center"
        >
          <Link as={NextLink} href={`/dashboard`} color="white" fontWeight="extrabold" fontSize="xl" mx={"2%"}>
            Dashboard
          </Link>
          <Link
            as={NextLink}
            href={`/tasks`}
            color="white"
            fontWeight="extrabold"
            fontSize="xl"
            mx={"2%"}
          >
            Tasks
          </Link>
          <Link
            as={NextLink}
            href={`/voting`}
            color="white"
            fontWeight="extrabold"
            fontSize="xl"
            mx={"2%"}
          >
            Voting
          </Link>
          <Link
            as={NextLink}
            href={`/edu-Hub`}
            color="white"
            fontWeight="extrabold"
            fontSize="xl"
            mx={"2%"}
          >
            Edu Hub
          </Link>
          <LoginButton />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
