import Banner from "@/components/banner";
import About from "@/components/about";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <section>
      <section id="banner"><Banner/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
    </section>
  );
}
