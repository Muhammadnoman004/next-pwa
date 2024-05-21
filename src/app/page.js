import NavbarComponent from "./Navbar/NavbarComponent";
import HomeComponent from "./HomeComponent/HomeComponent";
import ProjectComponent from "./Project/ProjectComponent";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Service from "./Services/Service";
import Team from "./Team/Team";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeComponent />
      <ProjectComponent />
      <Service />
      <Team />
      <Contact />
      <Footer />
    </>

  );
}
