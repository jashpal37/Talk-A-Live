import {ChatState} from "../Context/chatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../component/Sidebar/SideDrawer"
import MyChats from "../component/MyChats";
import ChatBox from "../component/ChatBox";
import { useState } from "react";


const ChatPage = () => {
  const {user} = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="5px"
      >
        {user && (
          <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
