import Header from "./components/Header";
import Banner from "./components/Banner";
import Timeline from "./components/Timeline";
import ServiceSummary from "./components/ServiceSummary";
import ComprehensiveApproach from "./components/ComprehensiveApproach";
import DevStackQaDepartment from "./components/DevStackQaDepartment";
import QaStandards from "./components/QaStandards";
import "./custom.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Timeline />
      <ServiceSummary />
      <ComprehensiveApproach />
      <DevStackQaDepartment />
      <QaStandards />
    </div>
  );
}

export default App;
