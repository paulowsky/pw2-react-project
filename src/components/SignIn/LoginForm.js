import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { Redirect } from 'react-router-dom'
import React, {useState} from 'react'

import useAuth from '../../hooks/useAuth'

export const LoginForm = (props) => {
  const { signed, signIn } = useAuth()

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  return (
    signed ? (
      <Redirect to='./' />
    ) : (
      <chakra.form
        onSubmit={(e) => {
          e.preventDefault()
          if(name && number) {
            signIn(name, number)
          }
        }}
        {...props}
      >
        <Stack spacing="6">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input name="name" value={name} onChange={(e) => setName(e.target.value)} type="name" autoComplete="name" required />
          </FormControl>
          <FormControl id="number">
            <FormLabel>Number</FormLabel>
            <Input name="number" value={number} onChange={(e) => setNumber(e.target.value)} type="number" autoComplete="number" required />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign in
          </Button>
        </Stack>
      </chakra.form>
    )
  )
}
