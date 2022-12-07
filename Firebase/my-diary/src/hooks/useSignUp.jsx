import { useState } from "react"
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState(null);
  // 서버와의 통신 상태를 저장합니다.
  const [isPending, setIsPending] = useState(false);
  // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트합니다.
  const { dispatch } = useAuthContext();

  // signup 훅을 만듭니다. email, password, displayName 세가지 매개변수를 갖습니다.
  const signup = (email, password, displayName) => {
    // 아직 에러가 없으니 null 입니다.
    setError(null);
    // 통신중이므로 true입니다.
    setIsPending(true);

    // 비밀번호 설정으로 유저정보를 등록합니다.
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // 회원 정보를 정상적으로 받지 못하면 실패입니다.
        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }

        // 회원가입이 완료되고 유저 정보에 닉네임을 업데이트합니다.
        // 프로필을 업데이트하는 함수에 dispatch 함수를 실행하여 우리가 만들었던 authReducer 함수를 호출합니다.
        updateProfile(appAuth.currentUser, { displayName })
        .then(() => {
            dispatch({ type: 'login', payload: user });

            setError(null);
            setIsPending(false);
        }).catch((error) => {
            console.log(error.message);
            setError(error.message);
            setIsPending(false);
        });
      })
      // 인증 실패했을 때
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }

  return { error, isPending, signup }
}