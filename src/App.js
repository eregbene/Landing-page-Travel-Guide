import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "https://github.com/eregbene/buddy-guide", title: "Github" },
    { url: "#", title: "Home" },
    { url: "http://eregbeneprojects.com/", title: "Resturants" },
    { url: "http://eregbeneprojects.com/", title: "Attractions" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"find your favourite Restuarants."}
        subtitle={
          "Our platform offers a wide variety of unique restuarant you can check from!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Best attractions."}
        subtitle={"only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;
