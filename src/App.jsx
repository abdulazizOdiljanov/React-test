import "./App.css";
import HeaderNav from "./components/header/header";
import HeroSection from "./components/hero/hero";
import CollectionsSection from "./components/collections/collections";
import ServicesSection from "./components/services/services";
// import PlansSection from "./components/plans/plans";

function App() {
  return (
    <div>
      <HeaderNav />
      <main className="main">
        <HeroSection />
        <CollectionsSection />
        <ServicesSection />
        {/* <PlansSection /> */}
      </main>
    </div>
  );
}

export default App;
