import Heading from "./algorithm/components/textComponents/Heading.js";
import Dash from "./components/Dash/Dash.jsx";
import logo from '/logo.svg'
function App() {
  return (
    <>
      <div className="logo">
        <img src={logo} />
      </div>
      <Dash />
    </>
  );
}

export default App
