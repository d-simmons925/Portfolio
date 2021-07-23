import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Header />
      <Skills />
      <Projects />
      <footer>
        <p>&copy; David Simmons 2021</p>
      </footer>
    </div>
  );
}

export default App;
