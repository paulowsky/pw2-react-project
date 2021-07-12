import {
  Box,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
import { Card } from './Card'
import { LoginForm } from './LoginForm'

export default function SignIn() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{
        base: '4',
        lg: '8',
      }}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Sign in to your account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium" />
        <Card>
          <LoginForm />
        </Card>
      </Box>
    </Box>
  )
}
