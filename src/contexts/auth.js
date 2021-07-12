import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage('@authApp: user')
  const [storageNumber, setStorageNumber, removeStorageNumber] = useLocalStorage('@authApp: number')

  const [signed, setSigned] = useState(false)
  const [user, setUser] = useState('')
  const [number, setNumber] = useState('')

  const signIn = (user_form, number_form) => {
    try {
      setStorageUser(user_form)
      setStorageNumber(number_form)
    } catch (err) {
      console.log(err)
    }
  }

  const signOut = () => {
    try {
      setUser('')
      setNumber('')
      removeStorageUser()
      removeStorageNumber()
      setSigned(false)
    } catch (err) {
      console.log(err)
    }
  }

  const isSigned = () => {
    if(storageUser && storageNumber) {
      setUser(storageUser)
      setNumber(storageNumber)
      setSigned(true)
    }
  }

  useEffect(() => {
    console.log('mudou -> '+signed)
  }, [signed])

  useEffect(() => {
    isSigned()
  }, [storageUser, storageNumber])

  return (
    <AuthContext.Provider value={{
      signed,
      signIn,
      signOut,
      user,
      number
    }}>
      { children}
    </AuthContext.Provider>
  )
}


export default AuthContext
