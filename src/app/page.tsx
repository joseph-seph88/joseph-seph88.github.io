import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import ProblemSolving from "@/components/ProblemSolving";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CertificatesEducation from "@/components/CertificatesEducation";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-15">
      <Header />
      <AboutMe />
      <ProblemSolving />
      <Experience />
      <Project />
      <Skills />
      <CertificatesEducation />
      <Footer />
    </div>
  );
}
