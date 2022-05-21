import React,{useState} from 'react'
import {VStack} from '@chakra-ui/layout'
import {FormControl,FormLabel} from '@chakra-ui/form-control'
import {Input,InputGroup,InputRightElement} from '@chakra-ui/input'
import {Button} from '@chakra-ui/button'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [show,setShow] = useState(false) 

    const postDetails = (pics) => {

    }

    const handleSubmit = () => {
        
    }

  return (
    <VStack spacing="5px">
    <FormControl id="first-name" isRequired>
      <FormLabel>Name</FormLabel>
      <Input
        placeholder="Enter Your Name"
        onChange={''}
      />
    </FormControl>
    <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type={show?"text":"password"}
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type='password'
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={()=>setShow(show => !show)} >
            {show?'Hide':"Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Confirm Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show? 'text' : "password"}
          placeholder="Confirm password"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={()=>setShow(show => !show)}>{show?'hide':"show"}</Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <FormControl id="pic">
      <FormLabel>Upload your Picture</FormLabel>
      <Input
        type="file"
        p={1.5}
        accept="image/*"
        onChange={(e)=> postDetails(e.target.files[0])}
      />
    </FormControl>
    <Button
      colorScheme="blue"
      width="100%"
      style={{ marginTop: 15 }}
      onClick={handleSubmit}
    >
      Sign Up
    </Button>
  </VStack>
  )
}

export default Signup