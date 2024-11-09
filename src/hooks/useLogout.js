import { useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";

export const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:8000/api-v1/auth/sign-out", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response?.json();
            if (data) {
                toast.success("Logout successfully");
                setTimeout(() => {
                    localStorage.removeItem("userAuth");
                    setAuthUser(null);
                    setLoading(false);
                },2000);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };
    return { logout, loading };
}