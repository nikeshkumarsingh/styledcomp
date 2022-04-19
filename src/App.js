import logo from './logo.svg';
import './App.css';
import{useState}from"react"
import{Button}from"./components/button"
import 'antd/dist/antd.css';
function App() {
  const [type,setType]=useState("dark");
  return (
    <div className="App">
      <h3>theme:{type}</h3>
      <Button
      type={type}
      onClick={()=>{
        setType(type==="Link"?"Text":"Link")
      }}
      >Link Button</Button>
      <Button
      type={type}
      onClick={()=>{
        setType(type==="Text"?"backgr":"Text")
      }}
      >Text Button</Button>
      <Button
      type={type}
      onClick={()=>{
        setType("dark")
      }}
      >Default</Button>
      <Button
      type={type}
      onClick={()=>{
        setType(type==="backgr"?"primary":"backgr")
      }}
      >Primary Button</Button>
      <Button
      type={type}
      onClick={()=>{
        setType(type==="primary"?"dark":"primary")
      }}>dahsed button</Button>
    </div>
  );
}

export default App;
