import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase.config";
import PropTypes from 'prop-types';

const googleProvider = new GoogleAuthProvider()


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    const creatUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoding(true)
        return signOut(auth)
    }

    // observe auth state change 
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user the current value',creatUser);
            setUser(currentUser)
            setLoding(false)
        })
        return () => {
            unsubsCribe
        }
    }, [])

    const authInfo = {
         user,
         loding,
         creatUser,
          signInUser,
          signInWithGoogle,
          logout }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}