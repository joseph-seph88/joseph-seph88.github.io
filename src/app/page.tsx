import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="max-w-none px-8">
      <Header />
      <AboutMe />

      {/* 나머지 섹션들도 컴포넌트로 분리할 수 있습니다 */}
      {/* Projects, Skills, Experience 등 */}
    </div>
  );
}
