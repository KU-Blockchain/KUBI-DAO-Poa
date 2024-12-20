import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Text,
  VStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import CountDown from "./countDown";
import { useRouter } from "next/router";


const glassLayerStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: -1,
  borderRadius: "inherit",
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(33, 33, 33, 0.97)",
};

const PollModal = ({
  onOpen,
  isOpen,
  onClose,
  selectedPoll,
  handleVote,
  contractAddress,
  loadingVote,
  selectedOption,
  setSelectedOption,
}) => {
  const router = useRouter();
  const { userDAO } = router.query;

  const handleModalClose = () => {
    onClose();
    router.push(`/voting/?userDAO=${userDAO}`);
  };

  const vote = () => {

    handleModalClose();

    const optionIndices = selectedPoll?.options?.map((_, index) => index);

    const weights = selectedPoll?.options?.map((_, index) => {
      return index === parseInt(selectedOption) ? 100 : 0;
    });

    let newPollId = selectedPoll.id.split("-")[0];

    handleVote(contractAddress, newPollId, optionIndices, weights);
  };

  return (
    <Modal onOpen={onOpen} isOpen={isOpen} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent
        alignItems="center"
        justifyContent="center"
        borderRadius="3xl"
        boxShadow="lg"
        display="flex"
        w="100%"
        maxWidth="40%"
        bg="transparent"
        position="relative"
        p={4}
        zIndex={1}
        mt="10%"
        color="ghostwhite"
      >
        <div className="glass" style={glassLayerStyle} />
        <ModalHeader
          color="rgba(333, 333, 333, 1)"
          fontWeight={"extrabold"}
          fontSize={"2xl"}
        >
          {selectedPoll?.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={6}>
            {/* Description Section */}
            <VStack ml="6" mr="6" spacing={2} alignItems="start">
              <Text color="rgba(333, 333, 333, 1)" fontSize="md">
                {selectedPoll?.description}
              </Text>
            </VStack>

            <CountDown
              duration={
                selectedPoll?.expirationTimestamp -
                Math.floor(Date.now() / 1000)
              }
            />

            {/* Voting Options Section */}
            <VStack color="rgba(333, 333, 333, 1)" spacing={4}>
              <RadioGroup onChange={setSelectedOption} value={selectedOption}>
                <VStack align="flex-start">
                  {selectedPoll?.options?.map((option, index) => (
                    <Radio size="lg" key={index} value={index}>
                      {option.name}{" "}
                      {selectedPoll.type === "Hybrid" ? (
                        // Show percentage for Hybrid type
                        `(Percentage: ${option.currentPercentage || 0}%)`
                      ) : (
                        // Fallback to showing votes, handle invalid BigNumber values
                        `(Votes: ${option.votes ? ethers.BigNumber.from(option.votes).toNumber() : 0})`
                      )}
                    </Radio>
                  ))}
                </VStack>
              </RadioGroup>
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={vote}
            mr={3}
            isLoading={loadingVote}
            loadingText="Handling Vote"
          >
            Vote
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PollModal;