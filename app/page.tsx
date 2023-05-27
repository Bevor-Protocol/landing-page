import Nav from "@/components/layout/Header";
import Home from "@/components/sections/Home";
import Footer from "@/components/layout/Footer";
// import About from "@/components/sections/About";
// import Team from "@/components/sections/Team";

export default (): JSX.Element => {
  return (
    <main>
      <Nav />
      <Home />
      <Footer />
    </main>
  );
};
