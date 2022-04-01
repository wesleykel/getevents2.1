
import './App.css';

import Title from "../components/1Title"
import Searchbar from '../components/2SearchBar';
import Navbar from '../components/4Navbar';





function App() {
  return (
<div className='App'>
<Title/>
<Navbar/>
<div className='padding'></div>
<Searchbar/>
</div>
  );
}

export default App;
