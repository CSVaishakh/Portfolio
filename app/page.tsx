import Banner from "@/components/banner";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import LeftSidebar from "@/components/header";
import RightSidebar from "@/components/rightSidebar";

export default function Home() {
  return (
    <section>
      <section id="leftbar"><LeftSidebar/></section>
      <section id="banner"><Banner/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="contact"><Contact/></section>
      <section id="rightbar"><RightSidebar/></section>
    </section>
  );
}
