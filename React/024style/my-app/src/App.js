import React from "react";
import styled, { css } from 'styled-components'

// css``방식과 비교해보자
const OneButton = styled.button`
    color: red;
`;

// styled하고 해당 component를 가져오면 된다.
const TwoButton = styled(OneButton)`
    font-size: 30px;
`;

// 일반 컴포넌트를 꾸며주기 위해서는 className={props.className}를 작성해야 합니다.
const Hello = (props) => {
    return <button className={props.className}>hello world</button>
}

const ThreeButton = styled(Hello)`
    font-size: 30px;
`;


const App = () => {
	return (
    <div>
        <OneButton>hello world</OneButton>
        <TwoButton>hello world</TwoButton>
        <Hello/>
        <ThreeButton/>
    </div>
	);
};
  
export default App;