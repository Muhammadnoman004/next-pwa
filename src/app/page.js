import NavbarComponent from "./Navbar/NavbarComponent";
import HomeComponent from "./HomeComponent/HomeComponent";
import ProjectComponent from "./Project/ProjectComponent";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeComponent />
      <ProjectComponent />
      <Contact />
      <Footer />
    </>

  );
}
