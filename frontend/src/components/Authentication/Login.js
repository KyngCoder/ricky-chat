import React,{useState} from 'react'
import {VStack} from '@chakra-ui/layout'
import {FormControl,FormLabel} from '@chakra-ui/form-control'
import {Input,InputGroup,InputRightElement} from '@chakra-ui/input'
import {Button} from '@chakra-ui/button'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show,setShow] = useState(false) 

    const handleSubmit = () => {

    }
  return (
    <VStack spacing="5px">
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
    
   
    <Button
      colorScheme="blue"
      width="100%"
      style={{ marginTop: 15 }}
      onClick={handleSubmit}
    >
      Login
    </Button>
    <Button
    variant="solid"
    colorScheme="red"
    width="100%"
    onClick={()=>{
        setEmail("guest@example.com")
        setPassword("123456")
    }}
    >Login as Guest </Button>
  </VStack>
  )
}

export default Login