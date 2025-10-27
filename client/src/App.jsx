import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("❌ Error connecting to backend"));
  }, []);

  return (
    <Router>
      <>
        <Helmet>
          <title>Badge Buddy</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        </Helmet>

        <Navbar />
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;