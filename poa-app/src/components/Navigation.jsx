// src/components/Navigation.jsx
import React from "react";
import Link from "next/link";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import Image from "next/image";

const Navigation = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
      position="fixed"
      top={0}
      w="100%"
      shadow={"md"}
    >
      {/* Wrap each Link in a Button component */}
      <Link href="/landing" passHref>
        <IconButton
          icon={
            <Image
              src="/images/poa_logo.png"
              alt="Home"
              width={54}
              height={48}
            />
          }
          variant="ghost"
          aria-label="Home"
        />
      </Link>

      <Link href="/about" passHref>
        <Button variant="outline" p={4} colorScheme="black">
          About
        </Button>
      </Link>

      <Link href="/browser" passHref>
        <Button variant="outline" p={4} colorScheme="black">
          Browser
        </Button>
      </Link>
      <Link href="/architect" passHref>
        <Button variant="outline" p={4} colorScheme="black">
          Architect
        </Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
