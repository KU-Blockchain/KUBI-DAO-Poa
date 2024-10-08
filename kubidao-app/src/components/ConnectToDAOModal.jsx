import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Portal,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const ConnectToDAOModal = ({ isOpen, onClose }) => {

  const handleConnect = async () => {
    router.push("/user");
    onClose();
  };

  return (
    <Portal>
      <Modal  isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay zIndex="1400" />
        <ModalContent zIndex="1500">
          <ModalHeader>Not Connected</ModalHeader>
          <ModalBody >
            <Text fontSize={"lg"} mb="4">Please switch to the Polygon Amoy network to continue and then try again.</Text>
            <Text>If you need testnet tokens get them from the faucet here: </Text>
            <Link href="https://faucet.polygon.technology/" passHref>
              <ChakraLink href="https://faucet.polygon.technology/" isExternal color="blue.500" textDecoration="underline">
                https://faucet.polygon.technology/
              </ChakraLink>
            </Link>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleConnect}>
              Join or Connect
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Portal>
  );
};

export default ConnectToDAOModal;
