import './app.css';
import {One} from './Components/One';
import {Two} from './Components/Two';

function App() {
  const style = {backgroundColor:"black", color:"white"};
  return (
    <div>

      <div style={{backgroundColor:"black", color:"white"}}>hello world 1</div>
      <div style={style}>hello world 2</div>

      {/* error */}
      {/* <div style="color:red;">hello world 3</div> */}

      <One />
      <Two />

      {/* <h2>hello</h2> */}
      {/* <h2>
      hello
      </h2> */}

      <h2 className="hi">hello</h2>
      <h2 className="hello">hello</h2>

      {/* class로 쓰면 안된다. 콘솔에 경고메시지로 className으로 쓰라고 경고가 뜬다. */}
      {/* <h2 class="hi">hello</h2>
      <h2 class="hello">hello</h2> */}
    </div>
  );
}

export default App;