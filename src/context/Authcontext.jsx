import { createContext,useState} from "react";
import proptypes from 'prop-types';
export const AuthContext = createContext();

// export const useAuthContext = () =>  useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("userAuth")) || null);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );


}


AuthProvider.propTypes = {
    children: proptypes.node.isRequired

}



