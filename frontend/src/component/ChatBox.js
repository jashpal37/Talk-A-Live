import React from 'react'
import {ChatState} from "../Context/chatProvider";
import { Box } from '@chakra-ui/react';
import SingleChat from './SingleChat';

const ChatBox = ({fetchAgain, setFetchAgain}) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{base: selectedChat ? "flex" : "none", md: "flex"}}
      flexDir='column'
      alignItems='center'
      borderRadius="lg"
      borderWidth='1px'
      w={{base: "100%", md: "68%"}}
      bg='white'
      p={3}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
}

export default ChatBox;
