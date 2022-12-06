import { useState } from 'react'
import { useSignup } from '../../hooks/useSignUp';
import styles from './SignUp.module.css'

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 때문에 다른 변수명을 사용하지 말아주세요. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
  const [displayName, setDisplayName] = useState('');

  // 우리가 직접 만든 useSignup 커스텀 훅을 이용합니다. useSignup 훅은 세 가지 프로퍼티를 가지는 객체를 반환합니다.
  const {error, isPending, signup} = useSignup();

  const handleData = (event) => {
    console.log(event.target.type);
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    } else if (event.target.type === 'text') {
      setDisplayName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 훅에서 받아온 signup 함수를 실행합니다.
    signup(email, password, displayName);
  };

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>회원가입</legend>

        <label htmlFor="myEmail">email : </label>
        <input type="email" id='myEmail' required value={email} onChange={handleData} />

        <label htmlFor="myPassWord">password : </label>
        <input type="password" id='myPassWord' required value={password} onChange={handleData} />

        <label htmlFor="myNickname">닉네임 : </label>
        <input type="text" id='myNickname' required value={displayName} onChange={handleData} />

        <button type='submit' className={styles.btn}>로그인</button>
      </fieldset>
    </form>
  );
}