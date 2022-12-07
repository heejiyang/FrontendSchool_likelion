import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

// 유저의 로그인 정보를 다른 컴포넌트들에게 전달해서 지금 로그인되어 있는지 아닌지 상태를 전달해주는 역할
// context객체를 생성합니다.
// Context는 React 컴포넌트 트리 안에서 데이터를 전역으로(global)사용할 수 있도록 고안된 방법입니다. Context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있습니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    //전개구문을 이용해 객체의 user 값을 업데이트 합니다.
    case 'login':
      return { ...state, user: action.payload }
    case 'logout':
      return { ...state, user: null }
    case 'authIsReady':
        return { ...state, user: action.payload, isAuthReady: true }
    default:
      return state
  }
}

// children들이 AuthContext를 구독하면서 상태가 변경되는지 아닌지 보고 그 상태를 따라갑니다
// context를 객체를 구독할 컴포넌트의 묶음 범위를 설정합니다.
const AuthContextProvider = ({ children }) => {

  // useState의 대체 함수입니다. 보통 숫자형이나 문자열 같은 간단한 형태의 데이터는 useState를 이용하지만 객체와 같이 복잡한 형태의 데이터를 다룰 때 많이 사용합니다.
  // user 초기값 null
  const [state, dispatch] = useReducer(authReducer, { user: null, isAuthReady: false })

  // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수입니다.
  // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다. 더 이상 유저의 변화를 관찰하지 않도록 하는 함수입니다.
  // 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지합니다.
  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function(user){
      dispatch({ type: 'authIsReady', payload: user });
      unsubscribe();
    })
  }, [])

  return (
    // Context 구독 범위를 설정. value는 어떤 값 공유할 것인지 정한다.
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }