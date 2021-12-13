import "./App.css";
import Card from "./components/Card";
import pic1 from "./pics/1.jpg";
import pic2 from "./pics/2.jpg";
import pic3 from "./pics/3.jpg";

function App() {
  return (
    <div className="App">
      <Card details=" Yodfat" link="http://goatswiththewind.com/" pic={pic1} />
      <Card
        details="Kishorit"
        link="https://kishorit.org.il/en/anafim/goat-dairy"
        pic={pic2}
      />
      <Card
        details=" Noat"
        link="https://www.naotfarm.co.il/en/about-us/"
        pic={pic3}
      />
    </div>
  );
}

export default App;
