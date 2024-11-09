import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import toast from "react-hot-toast";


export const useSignin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const signIn = async ({ email, password }) => {
        const isValid = handleError({ email, password });
        if (!isValid) return;
        try {
            setLoading(true);
            const response = await fetch("http://localhost:8000/api-v1/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response?.json();
            console.log('signin:',data);
            toast.success("login successfully");
            if (data) {
                setLoading(false);
                localStorage.setItem("userAuth", JSON.stringify(data?.data));
                localStorage.setItem("token", data?.token);
                setAuthUser(data?.data);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };
    const handleError = ({ email, password }) => {
        if (!email || !password) {
            toast.error("All fields are required");
            return false;
        } else {
            return true;
        }
    };
    return { loading, signIn };
}