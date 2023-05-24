import "./App.css";
import "./index.css";
import { TrustedSlider } from "./components/TrustedSlider";
import { Industries } from "./components/Industries";
import { DemoComponent } from "./components/Demo";

function App() {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      <TrustedSlider />
      <hr style={{ background: "white", margin: "25px 0px 25px 0px" }} />

      <Industries />
      <hr style={{ background: "white", margin: "25px 0px 25px 0px" }} />
      <DemoComponent />
    </div>
  );
}

export default App;
