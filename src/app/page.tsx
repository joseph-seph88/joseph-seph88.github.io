import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import ProblemSolving from "@/components/ProblemSolving";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-15">
      <Header />
      <AboutMe />
      <ProblemSolving />
      <Experience />




      {/* Skills */}
      <div className="text-center mb-4">
        <h2 className="font-medium text-3xl text-gray-800">Skills</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-transparent p-6 rounded-lg border-l-4 border-gray-500">
          <h4 className="mt-0 text-gray-600">프로그래밍 언어</h4>
          <ul>
            <li><strong>Dart/Flutter</strong> - 모바일 앱 개발</li>
            <li><strong>TypeScript/Node.js</strong> - 백엔드 API 개발</li>
            <li><strong>Python</strong> - 데이터 처리 및 자동화</li>
          </ul>
        </div>

        <div className="bg-transparent p-6 rounded-lg border-l-4 border-gray-500">
          <h4 className="mt-0 text-gray-600">프레임워크 & 라이브러리</h4>
          <ul>
            <li><strong>Flutter</strong> - 크로스 플랫폼 모바일 개발</li>
            <li><strong>NestJS</strong> - Node.js 백엔드 프레임워크</li>
            <li><strong>React</strong> - 웹 프론트엔드 개발</li>
            <li><strong>Bloc, Riverpod</strong> - 상태 관리</li>
          </ul>
        </div>

        <div className="bg-transparent p-6 rounded-lg border-l-4 border-gray-500">
          <h4 className="mt-0 text-gray-600">데이터베이스 & API</h4>
          <ul>
            <li><strong>PostgreSQL</strong> - 데이터베이스 설계 및 쿼리 최적화</li>
            <li><strong>REST API</strong> - Swagger 기반 API 설계</li>
            <li><strong>GraphQL</strong> - API 개발 및 최적화</li>
          </ul>
        </div>

        <div className="bg-transparent p-6 rounded-lg border-l-4 border-gray-500">
          <h4 className="mt-0 text-gray-600">개발 도구</h4>
          <ul>
            <li><strong>Git/GitHub</strong> - 버전 관리 및 협업</li>
            <li><strong>Docker</strong> - 컨테이너화 및 배포</li>
            <li><strong>Jira, Notion</strong> - 프로젝트 관리</li>
            <li><strong>Sentry</strong> - 에러 모니터링</li>
          </ul>
        </div>

        <div className="bg-transparent p-6 rounded-lg border-l-4 border-gray-500">
          <h4 className="mt-0 text-gray-600">디자인 & UI/UX</h4>
          <ul>
            <li><strong>Figma</strong> - UI/UX 디자인</li>
            <li><strong>Rive</strong> - 애니메이션 제작</li>
            <li><strong>반응형 웹 디자인</strong></li>
          </ul>
        </div>

        <div className="bg-transparent p-6 rounded-lg border-l-4 border-gray-500">
          <h4 className="mt-0 text-gray-600">아키텍처 & 방법론</h4>
          <ul>
            <li><strong>클린 아키텍처</strong> - SOLID 원칙 적용</li>
            <li><strong>모듈화 개발</strong> - 재사용 가능한 컴포넌트 설계</li>
            <li><strong>TDD</strong> - 테스트 주도 개발</li>
            <li><strong>CI/CD</strong> - 지속적 통합/배포</li>
          </ul>
        </div>
      </div>

      {/* Certificates & Education */}
      <div className="text-center mb-4">
        <h2 className="font-medium text-3xl text-gray-800">Certificates & Education</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8"></div>

      <div className="mb-8">
        <h4>자격증:</h4>
        <ul>
          <li>정보처리기사</li>
          <li>네트워크 관리사 2급</li>
        </ul>

        <h4>학력:</h4>
        <ul>
          <li>정보통신공학 학사 (학점은행제)</li>
          <li>실용음악학 학사</li>
        </ul>

        <h4>교육:</h4>
        <ul>
          <li>C 언어 기반 개발 부트캠프 수료</li>
          <li>Flutter 앱 개발 부트캠프 수료</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
