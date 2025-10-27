import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Router>
      <Helmet>
        <title>Badge Buddy</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <div id="inside">
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </Router>
  );
}

export default Layout;
