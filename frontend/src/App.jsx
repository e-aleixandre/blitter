import { useState } from 'react'
import './App.css'
import Avatar from './Components/Avatar/Avatar';
import BleetContainer from "./Components/BleetContainer"; 
import { shortAddress } from './Helpers';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faDonate} from "@fortawesome/free-solid-svg-icons";
import InputWithUnits from './Components/InputWithUnits/InputWithUnits';
import TipAction from './Components/TipAction/TipAction';
import Feed from './Components/Feed';

const App = () => {
  const [count, setCount] = useState(0);
  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

  return (
    <Feed />
  )
}

export default App
