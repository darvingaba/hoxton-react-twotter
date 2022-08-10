import { Navigate,Route,Routes } from 'react-router-dom';
import './App.css'
import { LeftMenu } from './components/LeftMenu'
import { TweetContainer } from './components/TweetContainer';
import { useLocation } from "react-router-dom";
import {Profile} from './components/Profile'



function App() {
  // let [value,getValue]=useState('')
  
  
    

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const path = usePathname();
  console.log(path);


 
const pathname = window.location.pathname;
console.log(pathname);

  return (
    <div className="App">
      <LeftMenu />
      <Routes >
      <Route index  element={<TweetContainer />} />
      <Route path="/tweets" element={<TweetContainer/>} />
      <Route path="/profile" element={<Profile/>} />
      </Routes>
      <div className="rightMenu"></div>
    </div>
  );
}

export default App
