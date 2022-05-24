import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Flex, Spacer } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import ChatLoading from "../ChatLoading";
import { Spinner } from "@chakra-ui/spinner";
import ProfileModal from "./ProfileModal";
import { getSender } from "../../config/ChatLogics";
import UserListItem from "../userAvatar/UserListItem"
import { ChatState } from "../context/ChatProvider"
import { Search2Icon } from '@chakra-ui/icons'



const SideDrawer = () => {
  const {user} = ChatState()
  const [search,setSearch] = useState("")
  const [searchResult,setSearchResult] = useState([])
  const [loading,seLoading] = useState(false);
  const [loadingChat,setLoadingChat] = useState()

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('userInfo')
    navigate('/')
  }

  return (
    <>
      <Box
      display="flex"
      justifyContent="space-between"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
      >
      <Tooltip label="search user to chat" hasArrow placement="bottom-end">
          <Button variant="gh">
            <Search2Icon />
              <Text d={{base:"none",md:"flex"}} px="4">
                Search User
              </Text>
          </Button>
        </Tooltip>
       
        <Text fontSize="2xl">
          Ricky's Chat
        </Text>
         <div>
           <Menu>
             <MenuButton p={1}>
               <BellIcon fontSize="2xl" m={1}/>
             </MenuButton>
              ///MenuList
           </Menu>
           <Menu>
             <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
               <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
             </MenuButton>
             <MenuList>
                <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
                </ProfileModal>
             
               <MenuDivider />
               <MenuItem onClick={logout}>Logout</MenuItem>
             </MenuList>
           </Menu>
         </div>
   
      </Box>
    </>
  )
}

export default SideDrawer