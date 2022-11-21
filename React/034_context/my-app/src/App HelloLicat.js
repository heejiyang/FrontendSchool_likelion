// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// fetch날리면 자식이 몇번째인지 상관없이 props로 내리며 전달해준다. 즉 사용하지 않더라도 props로 전달해야한다.

// const HelloLicat = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h2>{props.value.id}</h2>
//       <strong>{props.value.name}</strong>
//       <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two : {props.value.id}</h2>
//       <strong>Two : {props.value.name}</strong>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
  );
};

const HelloLicat = ({value:{name, id}}) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{name, id}}/>
    </div>
  );
};

const HelloLicatTwo = ({value:{name, id}}) => {
  return (
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  );
};

export default App;