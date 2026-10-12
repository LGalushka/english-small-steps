import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LessonCatalog from "./components/LessonCatalog/LessonCatalog";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <LessonCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
