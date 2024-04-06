
import './App.css';
import Navbar from './componants/Navbar';
// import TextForm from './componants/TextForm'
import NewText from './componants/NewText';
import Aleart from './componants/Aleart';
// import About from './componants/About';
import { useState } from 'react';
// import AboutNew from './componants/AboutNew'
// import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom';




function App() {

  

const [mode,setmode]=useState('light');
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type,
  })
  setTimeout(()=>{
    setAlert(null);
  },3000);

}
const [text,setText]=useState('Enable Dark mode');
const toggleMode =()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='black';
    setText('Disable Dark mode');
    showAlert('Dark mode is Enable','success');
    document.title='TextUtils Dark Mode is Enable';
    setInterval(()=>{
      document.title='TextUtils-Dark Mode'
    },2000);
   
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    setText('Enable Dark mode');
    showAlert('Light mode is Enable','success');
    document.title='light Mode is enable';
  }
}

const toggelMode2=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='red';
    setText('Disable dark mode');
    showAlert('Dark mode is Enable','success');
    // document.getElementsByClassName('btn btn-primary').style.backgroundColor='red';
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    setText('Enable light mode');
    showAlert('Light mode is Enable','success');
  }
}

  return (
    <>
    <Navbar title='My best program' mode={mode} toggleMode={toggleMode} toggelMode2={toggelMode2} text={text}></Navbar>
    <Aleart alert={alert}></Aleart>
    <div className="container">
    <NewText showAlert={showAlert} title='My first program' mode={mode}></NewText>

      {/* <Switch>
        <Route exact path='/about'>
        </Route>

        <Route exact path='/'>
       
        </Route>
      </Switch>
      </Router> */}
      {/* <NewText showAlert={showAlert} title='My first program' mode={mode}></NewText> */}
    {/* <TextForm heading='Enter the text to anylize'></TextForm> */}
    {/* <About></About> */}
    {/* <AboutNew></AboutNew> */}
    </div>
  
    </>
  )
}

export default App;
