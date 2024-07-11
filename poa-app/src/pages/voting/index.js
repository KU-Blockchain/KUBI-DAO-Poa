import React, { useState, useEffect, use } from "react";
import {
  HStack,
  Text,
  Box,
  useDisclosure,
  Flex,
  Container,
  Spacer,
  VStack,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useGraphContext } from "@/context/graphContext";
import { useWeb3Context } from "@/context/web3Context";
import CompletedPollModal from "@/templateComponents/studentOrgDAO/voting/completedPollModal";


import Navbar from "@/templateComponents/studentOrgDAO/NavBar";
import HeadingVote from "@/templateComponents/studentOrgDAO/voting/header";
import CountDown from "@/templateComponents/studentOrgDAO/voting/countDown";
import PollModal from "@/templateComponents/studentOrgDAO/voting/pollModal";

const glassLayerStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: -1,
  borderRadius: "inherit",
  backdropFilter: "blur(20px)",
  backgroundColor: "rgba(0, 0, 0, .73)",
};

const Voting = () => {
  const router = useRouter();
  const { userDAO } = router.query;

  const {
    createProposalDDVoting,
    getWinnerDDVoting,
    ddVote
  } = useWeb3Context();
  
  const { isOpen: isCompletedOpen, onOpen: onCompletedOpen, onClose: onCompletedClose } = useDisclosure();

  const {
    directDemocracyVotingContractAddress,
    hybridVotingOngoing,
    hybridVotingCompleted,
    setLoaded,
    democracyVotingOngoing,
    democracyVotingCompleted,
    address: account,
    participationVotingCompleted,
    participationVotingOngoing,
    votingContractAddress
  } = useGraphContext();

  useEffect(() => {
    setLoaded(userDAO);
  }, [userDAO]);

  const calculateRemainingTime = (expirationTimestamp, proposalId, isHybrid) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const duration = expirationTimestamp - currentTimestamp;

    const getWinner = async (address, proposalId) => {
      const newID = proposalId.split("-")[0];
      const tx = await getWinnerDDVoting(address, newID);
      await tx.wait();
    };

    if (duration < 0 && account !== "0x00") {
      getWinner(isHybrid ? votingContractAddress : directDemocracyVotingContractAddress, proposalId);
    }

    return Math.max(0, duration);
  };

  const PTVoteType = Array.isArray(hybridVotingOngoing) ? "Hybrid" : "Participation";
  const [votingTypeSelected, setVotingTypeSelected] = useState("Direct Democracy");


  const handleTabsChange = (index) => {
    setSelectedTab(index);
    const voteType = index === 0 ? "Direct Democracy" : PTVoteType;
    setVotingTypeSelected(voteType);
  };

  const [selectedTab, setSelectedTab] = useState(0);
  const [ongoingStartIndex, setOngoingStartIndex] = useState(0);
  const [completedStartIndex, setCompletedStartIndex] = useState(0);
  const proposalDisplayLimit = 3;
  const safeVotingOngoing = Array.isArray(selectedTab === 0 ? democracyVotingOngoing : (PTVoteType === "Hybrid" ? hybridVotingOngoing : participationVotingOngoing)) ? (selectedTab === 0 ? democracyVotingOngoing : ( PTVoteType=== "Hybrid" ? hybridVotingOngoing : participationVotingOngoing)) : [];
  const safeVotingCompleted = Array.isArray(selectedTab === 0 ? democracyVotingCompleted : (PTVoteType === "Hybrid" ? hybridVotingCompleted : participationVotingCompleted)) ? (selectedTab === 0 ? democracyVotingCompleted : (PTVoteType === "Hybrid" ? hybridVotingCompleted : participationVotingCompleted)) : [];
  



  const displayedOngoingProposals = safeVotingOngoing.slice(
    ongoingStartIndex,
    ongoingStartIndex + proposalDisplayLimit
  );

  const displayedCompletedProposals = safeVotingCompleted.slice(
    completedStartIndex,
    completedStartIndex + proposalDisplayLimit
  );

  const handlePreviousProposalsClickOngoing = () => {
    setOngoingStartIndex(Math.max(0, ongoingStartIndex - proposalDisplayLimit));
  };

  const handleNextProposalsClickOngoing = () => {
    if (ongoingStartIndex + proposalDisplayLimit < safeVotingOngoing.length) {
      setOngoingStartIndex(ongoingStartIndex + proposalDisplayLimit);
    }
  };

  const handlePreviousProposalsClickCompleted = () => {
    setCompletedStartIndex(Math.max(0, completedStartIndex - proposalDisplayLimit));
  };

  const handleNextProposalsClickCompleted = () => {
    if (completedStartIndex + proposalDisplayLimit < safeVotingCompleted.length) {
      setCompletedStartIndex(completedStartIndex + proposalDisplayLimit);
    }
  };


  

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isPollCompleted, setIsPollCompleted] = useState(false);


  
  const defaultProposal = { name: '', description: '', execution: '', time: 0, options: [] ,id:0 };
  const [proposal, setProposal] = useState(defaultProposal);

  const handlePollClick = (poll, isCompleted = false) => {
    setSelectedPoll(poll);
    setIsPollCompleted(isCompleted);
    router.push(`/voting?poll=${poll.id}&userDAO=${userDAO}`);
    if (isCompleted) {
      onCompletedOpen();
    } else {
      onOpen();
    }
  };
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProposal({ ...proposal, [name]: value });
  };

  const handleOptionsChange = (e) => {
    const options = e.target.value.split(", ");
    setProposal({ ...proposal, options });
  };

  const handleCreatePollClick = () => {
    setShowCreatePoll(!showCreatePoll);
  };

  useEffect(() => {
    if (router.query.poll) {
      const pollID = router.query.poll;
  
      const findPoll = (proposals) => {
        for (const proposal of proposals) {
          if (proposal.id === pollID) {
            return proposal;
          }
        }
        return null;
      };
  
      let pollFound = null;
      let pollType = "";
  
      // only search for poll if the voting arrays are not empty
      if (democracyVotingOngoing?.length > 0) {
        pollFound = findPoll(democracyVotingOngoing);
        if (pollFound) pollType = "Direct Democracy";
      }
      
      if (!pollFound && hybridVotingOngoing?.length > 0) {
        pollFound = findPoll(hybridVotingOngoing);
        if (pollFound) pollType = "Hybrid";
      }
  
      if (!pollFound && participationVotingOngoing?.length > 0) {
        pollFound = findPoll(participationVotingOngoing);
        if (pollFound) pollType = "Participation";
      }
  
      if (!pollFound && democracyVotingCompleted?.length > 0) {
        pollFound = findPoll(democracyVotingCompleted);
        if (pollFound) pollType = "Direct Democracy";
      }
  
      if (!pollFound && hybridVotingCompleted?.length > 0) {
        pollFound = findPoll(hybridVotingCompleted);
        if (pollFound) pollType = "Hybrid";
      }
  
      if (!pollFound && participationVotingCompleted?.length > 0) {
        pollFound = findPoll(participationVotingCompleted);
        if (pollFound) pollType = "Participation";
      }
  
      if (pollFound) {
        setSelectedPoll(pollFound);
        setVotingTypeSelected(pollType);
        setSelectedTab(pollType === "Direct Democracy" ? 0 : 1);
        setIsPollCompleted(
          democracyVotingCompleted.includes(pollFound) ||
          hybridVotingCompleted.includes(pollFound) ||
          participationVotingCompleted.includes(pollFound)
        );
        if (democracyVotingCompleted.includes(pollFound) ||
            hybridVotingCompleted.includes(pollFound) ||
            participationVotingCompleted.includes(pollFound)) {
          onCompletedOpen();
        } else {
          onOpen();
        }
      }
    }
  }, [
    router.query.poll,
    democracyVotingOngoing,
    democracyVotingCompleted,
    hybridVotingOngoing,
    hybridVotingCompleted,
    participationVotingOngoing,
    participationVotingCompleted,
    onOpen,
    onCompletedOpen
  ]);
  
  


  const handlePollCreated = () => {
    const run = () => {
      if (votingTypeSelected === "Participation") {
        return createProposalDDVoting(votingContractAddress, proposal.name, proposal.description, proposal.time, proposal.options, 0, account, 0, false);
      }
      if (votingTypeSelected === "Hybrid") {
        return createProposalDDVoting(votingContractAddress, proposal.name, proposal.description, proposal.time, proposal.options, 0, account, 0, false);
      }
      if (votingTypeSelected === "Direct Democracy") {
        return createProposalDDVoting(directDemocracyVotingContractAddress, proposal.name, proposal.description, proposal.time, proposal.options, 0, account, 0, false);
      }

    };
    setLoadingSubmit(true);
    run().then(() => {
      setLoadingSubmit(false);
      setShowCreatePoll(false);
      setProposal(defaultProposal);
    }).catch((error) => {
      console.error("Error creating poll:", error);
      setLoadingSubmit(false);
      setShowCreatePoll(false);
      setProposal(defaultProposal);
    });
  };


  

  return (
    <>
      <Navbar />
      <Container maxW="container.2xl" py={6} px={10}>
        <HeadingVote selectedTab={selectedTab} />
        <Tabs
          index={selectedTab}
          isFitted
          variant="soft-rounded"
          onChange={handleTabsChange}
          mb={6}
        >
        <TabList
          alignItems="center"
          justifyContent="center"
          borderRadius="3xl"
          boxShadow="lg"
          p={6}
          w="100%"
          bg="transparent"
          position="relative"
          display="flex"
          zIndex={0}
          color="rgba(333, 333, 333, 1)"
        >
          <div className="glass" style={glassLayerStyle} />
          <Tab
            fontSize="2xl"
            fontWeight="extrabold"
            color="rgba(333, 333, 333, 1)"
            _selected={{ backgroundColor: "ghostwhite", color: "black" }}
          >
            Direct Democracy
          </Tab>
          <Tab
            fontSize="2xl"
            fontWeight="extrabold"
            color="rgba(333, 333, 333, 1)"
            _selected={{ backgroundColor: "ghostwhite", color: "black" }}
          >
            {PTVoteType }
          </Tab>
        </TabList>

          <TabPanels>
            <TabPanel>
              <Flex
                align="center"
                mb={8}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="3xl"
                boxShadow="lg"
                p="2%"
                w="100%"
                bg="transparent"
                position="relative"
                display="flex"
                zIndex={0}
              >
                <div className="glass" style={glassLayerStyle} />
                <Flex w="100%" flexDirection="column">
                  <VStack alignItems={"flex-start"} spacing={8}>
                    <HStack w="100%" justifyContent="space-between">
                      <Heading pl={2} color="rgba(333, 333, 333, 1)">
                        Ongoing Votes
                      </Heading>
                      <Button
                        fontWeight="black"
                        p="2%"
                        w="20%"
                        bg="green.300"
                        mt="2%"
                        onClick={handleCreatePollClick}
                        _hover={{ bg: "green.400", transform: "scale(1.05)" }}
                      >
                        {showCreatePoll ? "Hide Create Vote Form" : "Create Vote"}
                      </Button>
                    </HStack>
                    <HStack justifyContent={"flex-start"} w="100%" spacing={4}>
                      {displayedOngoingProposals.length > 0 ? (
                        displayedOngoingProposals.map((proposal, index) => (
                          <Box
                            key={index}
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="3xl"
                            boxShadow="lg"
                            display="flex"
                            w="30%"
                            minW="30%"
                            maxWidth="30%"
                            bg="transparent"
                            position="relative"
                            color="rgba(333, 333, 333, 1)"
                            p={2}
                            zIndex={1}
                            _hover={{ bg: "black", boxShadow: "md", transform: "scale(1.05)" }}
                            onClick={() => handlePollClick(proposal)}
                          >
                            <div className="glass" style={glassLayerStyle} />
                            <Text mb="4" fontSize="xl" fontWeight="extrabold">{proposal.name}</Text>
                            <CountDown duration={calculateRemainingTime(proposal?.experationTimestamp, proposal?.id, false)} />
                            <Text mt="2"> Voting Options:</Text>
                            <HStack mb={2} spacing={6}>
                              {proposal.options.map((option, index) => (
                                <Text fontSize="sm" fontWeight="extrabold" key={index}>{option.name}</Text>
                              ))}
                            </HStack>
                          </Box>
                        ))
                      ) : (
                        <Box
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="3xl"
                          boxShadow="lg"
                          display="flex"
                          w="100%"
                          maxWidth="100%"
                          bg="transparent"
                          position="relative"
                          p={4}
                          zIndex={1}
                          color="rgba(333, 333, 333, 1)"
                        >
                          <div className="glass" style={glassLayerStyle} />
                          <Flex
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              mb="2"
                              fontSize="2xl"
                              fontWeight="extrabold"
                              pl={12}
                              pr={12}
                              pt={14}
                              pb={14}
                            >
                              No Ongoing Votes
                            </Text>
                          </Flex>
                        </Box>
                      )}
                      {displayedOngoingProposals.length > 0 && (
                        <>
                          <Spacer />
                          <HStack justifyContent="bottom" spacing={4}>
                            <IconButton
                              aria-label="Previous polls"
                              background="transparent"
                              border="none"
                              _hover={{ bg: 'transparent' }} 
                              _active={{ bg: 'transparent' }}
                              icon={
                                <ArrowBackIcon 
                                boxSize="6" 
                                color="black"
                                />
                              }
                              onClick={handlePreviousProposalsClickOngoing}
                            />
                            <IconButton
                              aria-label="Next polls"
                              background="transparent"
                              border="none"
                              _hover={{ bg: 'transparent' }} 
                              _active={{ bg: 'transparent' }}
                              icon={
                                <ArrowForwardIcon 
                                boxSize="6" 
                                color="black"
                                />
                              }
                              onClick={handleNextProposalsClickOngoing}
                            />
                          </HStack>
                        </>
                      )}
                    </HStack>
                    <Heading pl={2} color="rgba(333, 333, 333, 1)">
                      History
                    </Heading>
                    <HStack spacing={4} w="100%" justifyContent="flex-start">
                      {displayedCompletedProposals.length > 0 ? (
                        displayedCompletedProposals.map((proposal, index) => {
                          const totalVotes = proposal.totalVotes;
                          const WinnerName = proposal.options[proposal.winningOptionIndex].name;
                          const predefinedColors = [
                            "red",
                            "darkblue",
                            "yellow",
                            "purple",
                          ];
                          const data = [
                            {
                              name: "Options",
                              values: proposal.options.map((option, index) => {
                                const color =
                                  index < predefinedColors.length
                                    ? predefinedColors[index]
                                    : `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
                                return {
                                  value: (option.votes / totalVotes) * 100,
                                  color: color,
                                };
                              }),
                            },
                          ];

                          return (
                            <Box
                              key={index}
                              flexDirection="column"
                              alignItems="center"
                              justifyContent="center"
                              borderRadius="3xl"
                              boxShadow="lg"
                              display="flex"
                              w="30%"
                              minW="30%"
                              maxWidth="30%"
                              bg="transparent"
                              position="relative"
                              color="rgba(333, 333, 333, 1)"
                              zIndex={1}
                              onClick = {() => handlePollClick(proposal, true)}
                            >
                              <div className="glass" style={glassLayerStyle} />
                              <Text
                                mr="2"
                                mt="4"
                                ml="2 "
                                mb="2"
                                fontSize={"xl"}
                                fontWeight="extrabold"
                              >
                                {proposal.name}
                              </Text>
                              <Flex justifyContent="center">
                                <BarChart
                                  width={200}
                                  height={30}
                                  layout="vertical"
                                  data={data}
                                >
                                  <XAxis type="number" hide="true" />
                                  <YAxis type="category" dataKey="name" hide="true" />
                                  {data[0].values.map((option, index) => (
                                    <Bar key={index} dataKey={`values[${index}].value`} stackId="a" fill={option.color} />
                                  ))}
                                </BarChart>
                              </Flex>
                              <Text mb="2" fontSize="xl" fontWeight="extrabold">
                                Winner: {WinnerName}
                              </Text>
                            </Box>
                          );
                        })
                      ) : (
                        <Box
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="3xl"
                          boxShadow="lg"
                          display="flex"
                          w="100%"
                          maxWidth="100%"
                          bg="transparent"
                          position="relative"
                          p={4}
                          zIndex={1}
                          color="rgba(333, 333, 333, 1)"
                        >
                          <div className="glass" style={glassLayerStyle} />
                          <Flex
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              mb="2"
                              fontSize="2xl"
                              fontWeight="extrabold"
                              pl={12}
                              pr={12}
                              pt={14}
                              pb={14}
                            >
                              No History
                            </Text>
                          </Flex>
                        </Box>
                      )}
                      {displayedCompletedProposals.length > 0 && (
                        <>
                          <Spacer />
                          <HStack justifyContent="bottom" spacing={-2}>
                            <IconButton
                              background="transparent"
                              border="none"
                              _hover={{ bg: "transparent" }}
                              _active={{ bg: "transparent" }}
                              aria-label="Previous history polls"
                              icon={
                                <ArrowBackIcon
                                  boxSize="6"
                                  color="black"
                                />
                              }
                              onClick={handlePreviousProposalsClickCompleted}
                            />
                            <IconButton
                              background="transparent"
                              border="none"
                              _hover={{ bg: "transparent" }}
                              _active={{ bg: "transparent" }}
                              aria-label="Next history polls"
                              icon={
                                <ArrowForwardIcon
                                  boxSize="6"
                                  color="black"
                                />
                              }
                              onClick={handleNextProposalsClickCompleted}
                            />
                          </HStack>
                        </>
                      )}
                    </HStack>
                  </VStack>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex
                align="center"
                mb={8}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="3xl"
                boxShadow="lg"
                p="2%"
                w="100%"
                bg="transparent"
                position="relative"
                display="flex"
                zIndex={0}
              >
                <div className="glass" style={glassLayerStyle} />
                <Flex w="100%" flexDirection="column">
                  <VStack alignItems={"flex-start"} spacing={8}>
                    <HStack w="100%" justifyContent="space-between">
                      <Heading pl={2} color="rgba(333, 333, 333, 1)">
                        Ongoing Votes
                      </Heading>
                      <Button
                        fontWeight="black"
                        p="2%"
                        w="20%"
                        bg="green.300"
                        mt="2%"
                        onClick={handleCreatePollClick}
                        _hover={{ bg: "green.400", transform: "scale(1.05)" }}
                      >
                        {showCreatePoll ? "Hide Create Vote Form" : "Create Vote"}
                      </Button>
                    </HStack>
                    <HStack justifyContent={"flex-start"} w="100%" spacing={4}>
                      {displayedOngoingProposals.length > 0 ? (
                        displayedOngoingProposals.map((proposal, index) => (
                          <Box
                            key={index}
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="3xl"
                            boxShadow="lg"
                            display="flex"
                            w="30%"
                            minW="30%"
                            maxWidth="30%"
                            bg="transparent"
                            position="relative"
                            color="rgba(333, 333, 333, 1)"
                            p={2}
                            zIndex={1}
                            _hover={{ bg: "black", boxShadow: "md", transform: "scale(1.05)" }}
                            onClick={() => handlePollClick(proposal)}
                          >
                            <div className="glass" style={glassLayerStyle} />
                            <Text mb="4" fontSize="xl" fontWeight="extrabold">{proposal.name}</Text>
                            <CountDown duration={calculateRemainingTime(proposal?.experationTimestamp, proposal?.id, true)} />
                            <Text mt="2"> Voting Options:</Text>
                            <HStack mb={2} spacing={6}>
                              {proposal.options.map((option, index) => (
                                <Text fontSize="sm" fontWeight="extrabold" key={index}>{option.name}</Text>
                              ))}
                            </HStack>
                          </Box>
                        ))
                      ) : (
                        <Box
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="3xl"
                          boxShadow="lg"
                          display="flex"
                          w="100%"
                          maxWidth="100%"
                          bg="transparent"
                          position="relative"
                          p={4}
                          zIndex={1}
                          color="rgba(333, 333, 333, 1)"
                        >
                          <div className="glass" style={glassLayerStyle} />
                          <Flex
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              mb="2"
                              fontSize="2xl"
                              fontWeight="extrabold"
                              pl={12}
                              pr={12}
                              pt={14}
                              pb={14}
                            >
                              No Ongoing Votes
                            </Text>
                          </Flex>
                        </Box>
                      )}
                      {displayedOngoingProposals.length > 0 && (
                        <>
                          <Spacer />
                          <HStack justifyContent="bottom" spacing={4}>
                            <IconButton
                              aria-label="Previous polls"
                              background="transparent"
                              border="none"
                              _hover={{ bg: 'transparent' }} 
                              _active={{ bg: 'transparent' }}
                              icon={
                                <ArrowBackIcon 
                                boxSize="6" 
                                color="black"
                                />
                              }
                              onClick={handlePreviousProposalsClickOngoing}
                            />
                            <IconButton
                              aria-label="Next polls"
                              background="transparent"
                              border="none"
                              _hover={{ bg: 'transparent' }} 
                              _active={{ bg: 'transparent' }}
                              icon={
                                <ArrowForwardIcon 
                                boxSize="6" 
                                color="black"
                                />
                              }
                              onClick={handleNextProposalsClickOngoing}
                            />
                          </HStack>
                        </>
                      )}
                    </HStack>
                    <Heading pl={2} color="rgba(333, 333, 333, 1)">
                      History
                    </Heading>
                    <HStack spacing={4} w="100%" justifyContent="flex-start">
                      {displayedCompletedProposals.length > 0 ? (
                        displayedCompletedProposals.map((proposal, index) => {
                          const totalVotes = proposal.totalVotes;
                          const WinnerName = proposal.options[proposal.winningOptionIndex].name;
                          const predefinedColors = [
                            "red",
                            "darkblue",
                            "yellow",
                            "purple",
                          ];
                          const data = [
                            {
                              name: "Options",
                              values: proposal.options.map((option, index) => {
                                const color =
                                  index < predefinedColors.length
                                    ? predefinedColors[index]
                                    : `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
                                return {
                                  value: (option.votes / totalVotes) * 100,
                                  color: color,
                                };
                              }),
                            },
                          ];

                          return (
                            <Box
                              key={index}
                              flexDirection="column"
                              alignItems="center"
                              justifyContent="center"
                              borderRadius="3xl"
                              boxShadow="lg"
                              display="flex"
                              w="30%"
                              minW="30%"
                              maxWidth="30%"
                              bg="transparent"
                              position="relative"
                              color="rgba(333, 333, 333, 1)"
                              zIndex={1}
                              onClick={() => handlePollClick(proposal, true)}
                            >
                              <div className="glass" style={glassLayerStyle} />
                              <Text
                                mr="2"
                                mt="4"
                                ml="2 "
                                mb="2"
                                fontSize={"xl"}
                                fontWeight="extrabold"
                              >
                                {proposal.name}
                              </Text>
                              <Flex justifyContent="center">
                                <BarChart
                                  width={200}
                                  height={30}
                                  layout="vertical"
                                  data={data}
                                >
                                  <XAxis type="number" hide="true" />
                                  <YAxis type="category" dataKey="name" hide="true" />
                                  {data[0].values.map((option, index) => (
                                    <Bar key={index} dataKey={`values[${index}].value`} stackId="a" fill={option.color} />
                                  ))}
                                </BarChart>
                              </Flex>
                              <Text mb="2" fontSize="xl" fontWeight="extrabold">
                                Winner: {WinnerName}
                              </Text>
                            </Box>
                          );
                        })
                      ) : (
                        <Box
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="3xl"
                          boxShadow="lg"
                          display="flex"
                          w="100%"
                          maxWidth="100%"
                          bg="transparent"
                          position="relative"
                          p={4}
                          zIndex={1}
                          color="rgba(333, 333, 333, 1)"
                        >
                          <div className="glass" style={glassLayerStyle} />
                          <Flex
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              mb="2"
                              fontSize="2xl"
                              fontWeight="extrabold"
                              pl={12}
                              pr={12}
                              pt={14}
                              pb={14}
                            >
                              No History
                            </Text>
                          </Flex>
                        </Box>
                      )}
                      {displayedCompletedProposals.length > 0 && (
                        <>
                          <Spacer />
                          <HStack justifyContent="bottom" spacing={-2}>
                            <IconButton
                              background="transparent"
                              border="none"
                              _hover={{ bg: "transparent" }}
                              _active={{ bg: "transparent" }}
                              aria-label="Previous history polls"
                              icon={
                                <ArrowBackIcon
                                  boxSize="6"
                                  color="black"
                                />
                              }
                              onClick={handlePreviousProposalsClickCompleted}
                            />
                            <IconButton
                              background="transparent"
                              border="none"
                              _hover={{ bg: "transparent" }}
                              _active={{ bg: "transparent" }}
                              aria-label="Next history polls"
                              icon={
                                <ArrowForwardIcon
                                  boxSize="6"
                                  color="black"
                                />
                              }
                              onClick={handleNextProposalsClickCompleted}
                            />
                          </HStack>
                        </>
                      )}
                    </HStack>
                  </VStack>
                </Flex>
              </Flex>
            </TabPanel>
            <Modal isOpen={showCreatePoll} onClose={handleCreatePollClick}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a Vote</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack
                    as="form"
                    onSubmit={handlePollCreated}
                    spacing={4}
                    mt={8}
                    w="100%"
                  >
                    <FormControl>
                      <FormLabel>Proposal title</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        value={proposal.name}
                        onChange={handleInputChange}
                        required
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Proposal Description</FormLabel>
                      <Textarea
                        name="description"
                        value={proposal.description}
                        onChange={handleInputChange}
                        required
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Time (in Minutes)</FormLabel>
                      <Input
                        type="number"
                        name="time"
                        value={proposal.time}
                        onChange={handleInputChange}
                        required
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Options (comma and space separated)</FormLabel>
                      <Textarea
                        name="options"
                        value={proposal.options.join(", ")}
                        onChange={handleOptionsChange}
                        placeholder="Option 1, Option 2, Option 3"
                        required
                      />
                    </FormControl>
                    <Text fontSize="md" color="gray.500">Create votes to control treasury and create tasks or projects Coming Soon</Text>
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    onClick={handlePollCreated}
                    isLoading={loadingSubmit}
                    loadingText="Handling Process"
                  >
                    Submit Poll
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </TabPanels>
        </Tabs>
        <PollModal
          isOpen={isOpen}
          onClose={onClose}
          handleVote={ddVote}
          contractAddress={votingTypeSelected === "Direct Democracy" ? directDemocracyVotingContractAddress : votingContractAddress}
          selectedPoll={selectedPoll}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onOpen={onOpen}
        />
        <CompletedPollModal
          isOpen={isCompletedOpen}
          onClose={onCompletedClose}
          selectedPoll={selectedPoll}
        />
      </Container>
    </>
  );
};

export default Voting;
