import Navbar from './components/navbar'; 
import Footer from './components/footer'; 
import TexrForm from './components/TexrForm'
function App() {
  return (
    <div>
      <Navbar /> 
      <TexrForm/>
      <div style={{margin: '330px'}}></div>
      <Footer/>
    </div>
  );
}

export default App;