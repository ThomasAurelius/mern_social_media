import "./App.css"
import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Profile /> */}
      {/* <Auth /> */}
        <div className='blur' style={{top: '-8%', right: "0"}}>
        
        </div>
        <div className='blur' style={{top: '36%', left: '-8rem'}} >
        
        </div>
    </div>
  );
}

export default App;
