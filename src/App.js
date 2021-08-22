import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {incresNumber,decreaseNumber} from './actions'

function App() {
  const myvale=useSelector((state)=>state.changeNumber)
  const dispatch=useDispatch()
  return (
    <>
     <div>
       <button onClick={()=>dispatch(incresNumber())}>increament</button>
       <h1>{myvale}</h1>
       <button onClick={()=>dispatch(decreaseNumber())}>decreament</button>
     </div>
    </>
  
  );
}

export default App;
