
import './App.css';

import Title from "../components/1Title"
import Searchbar from '../components/2SearchBar';
import Navbar from '../components/4Navbar';
import NewModal from '../components/9ReactModal';




function App() {
  return (
<div className='App'>

<Title/>

<Navbar/>
<Searchbar/>
<NewModal/>
</div>
  );
}

export default App;
