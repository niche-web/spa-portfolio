import "./assets/styles/main.scss";
import Container from "./layout/Container";
import Navigation from "./layout/Navigation";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";

function App() {
  return (
    <Container className="container">
      <Navigation />
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
}

export default App;
