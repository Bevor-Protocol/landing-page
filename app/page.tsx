import Nav from "@/components/layout/Header";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
// import Team from "@/components/sections/Team";

export default (): JSX.Element => {
  return (
    <main>
      <Nav active="home" />
      <Home />
      <About />
    </main>
  );
};
