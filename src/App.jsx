import "./assets/styles/main.scss";
import Container from "./layout/Container";
import Navigation from "./layout/Navigation";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SectionProjects from "./layout/SectionProjects";
import SectionSkills from "./layout/SectionSkills";

function App() {
  return (
    <Container className="container">
      <Navigation />
      <Header />
      <SectionSkills />
      {/* <SectionProjects /> */}
      <Footer />
    </Container>
  );
}

export default App;
