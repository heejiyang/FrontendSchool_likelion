import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
//   let clap = ""
//   for (let i of String(like)){
//     if(i === '3'){
//         clap = '짝👏'
//     } else if (i === '6'){
//         clap = '짝👏'
//     } else if (i === '9'){
//         clap = '짝👏'
//     }
//   }

  // '123123'.match(/[369]/g)
  // ['3', '3']
  // let heart = String(like).match(/[369]/g)? '짝👏' : '';

  // 123123'.split("").filter(v => v === '3' || v === '6' || v === '9')
  // ['3', '3']
  let clap = String(like).split("").filter(v => v === '3' || v === '6' || v === '9').length? '짝👏' : '';

  function handleClickLike() {
    setLike(like + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{clap ? clap : ''}</span>
      </div>
  )
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;