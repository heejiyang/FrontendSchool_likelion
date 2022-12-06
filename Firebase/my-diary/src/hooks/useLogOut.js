import { signOut } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();


    const logout = () => {
      setError(null);
      setIsPending(true);

      signOut(appAuth).then(() => {
        // 로그아웃 성공
        dispatch({ type: 'logout' })
        setError(null);
        setIsPending(false);

      }).catch((error) => {
        // 로그아웃 실패
        setError(error.message);
        setIsPending(false);
      });
    }
    return { error, isPending, logout }
}