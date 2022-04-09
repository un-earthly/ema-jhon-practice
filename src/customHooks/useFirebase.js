import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { auth } from "../firebase.init"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
export default function useFirebase() {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider()


    let location = useLocation();
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user)


                let from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
    }

    const handleSignOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [])
    return {
        user,
        signInWithGoogle,
        handleSignOut,

    }
}
