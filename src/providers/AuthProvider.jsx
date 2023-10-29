import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()

const auth = getAuth(app)



const AuthProvider = ( { children } ) => {

    const authInfo = {

    }

    return ( 
        <AuthContext.provider value={authInfo}>
            { children }
        </AuthContext.provider>
    );
};

export default AuthProvider;