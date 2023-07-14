import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../component/Authentication/Login";
import Signup from "../component/Authentication/Signup";
import React from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  useEffect(() => {
    //user already logged in 
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Container maxW="xl">
      <Box
        display="flex"
        justifyContent="center"
        w="100%"
        padding={3}
        m="40px 0 15px 0"
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" color="black">
          Chat-A-Live
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme='whatsapp'>
          <TabList>
            <Tab width="50%">Sing In</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
