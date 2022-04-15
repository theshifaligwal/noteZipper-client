import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MyNotes from "./pages/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
