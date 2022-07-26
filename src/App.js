import './index.css';

import Body from './layout/body';
import Footer from './layout/footer';
import Header from './layout/header';
import SidleBar from './layout/sidlerBar';


function App() {
  return (
    <div>
    <Header/>
    <SidleBar/>
    <div className='layout'>
    <Body/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
