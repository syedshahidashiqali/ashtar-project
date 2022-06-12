import Header from "./components/Header";
import Banner from "./components/Banner";
import Timeline from "./components/Timeline";
import ServiceSummary from "./components/ServiceSummary";
import "./custom.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Timeline />
      <ServiceSummary />
    </div>
  );
}

export default App;
