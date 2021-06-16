import React, { useContext, useState, useEffect } from "react"
import firebase from "firebase/app"
import { auth, database } from "./Firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}



export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signup(firstName, lastName, email, password) {
    const r = await auth.createUserWithEmailAndPassword(email, password)
    console.log(r);
    try {
      database.users.add({
        firstName: firstName,
        lastName: lastName,
        id: r.user.uid
      })
    } catch (error) {
      console.log(error);
    };
    
    return r
  }

  async function signupWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider()
    const r = await auth.signInWithPopup(provider)
    console.log(r)
    database.users.add({
      firstName: "",
      lastName: "",
      id: r.user.uid
    })
    return r
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signin,
    signup,
    logout,
    signupWithGoogle,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}