import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Create from "./create";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Header />
     <h2>Find Your Work Space for Today</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="create" element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        
      </main>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default App;
