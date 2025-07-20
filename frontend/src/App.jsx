import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ListAllTrip from "./pages/ListAllTrip";
import Footer from "./Components/Footer";
import ScrollToTop from "react-scroll-to-top";
import EditOrder from "./pages/EditOrder";
import LoginForm from "./Components/LoginForm";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
    {
    path: "/login",
    element: <LoginForm />, // Halaman login tanpa Navbar dan Footer
  },
  {
    path: "/tours",
    element: (
      <>
        <Navbar />
        <Tours />
        <Footer />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <Navbar />
        <Gallery />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/ListAllTrip",
    element: (
      <>
        <Navbar />
        <ListAllTrip />
        <Footer />
      </>
    ),
  },
  {
  path: "/edit/:id",
  element: (
    <>
      <Navbar />
      <EditOrder />
      <Footer />
    </>
  ),
},
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },

]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop
        color="white"
        smooth
        style={{
          backgroundColor: "#EF4444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default App;
