import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-36">
      <Header />
      <AboutMe />

      {/* Project */}
      <div className="text-center mb-4">
        <h2 className="font-medium text-3xl text-gray-800">Project</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-1">
          <Image
            src="/assets/images/style.png"
            alt="스타일 앱 프로젝트"
            width={400}
            height={200}
            className="w-full h-48 object-contain bg-gray-50"
          />
          <div className="p-4">
            <h4 className="mt-0 text-gray-600">스타일 앱 플랫폼</h4>
            <p>Flutter 기반의 스타일 공유 및 커머스 플랫폼</p>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-1">
          <Image
            src="/assets/images/education.png"
            alt="AI 교육 플랫폼"
            width={400}
            height={200}
            className="w-full h-48 object-contain bg-gray-50"
          />
          <div className="p-4">
            <h4 className="mt-0 text-gray-600">AI 교육 플랫폼</h4>
            <p>AI 언어 교육 콘텐츠 제공 및 학습 관리 시스템</p>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-1">
          <Image
            src="/assets/images/weather.png"
            alt="날씨 알림 플랫폼"
            width={400}
            height={200}
            className="w-full h-48 object-contain bg-gray-50"
          />
          <div className="p-4">
            <h4 className="mt-0 text-gray-600">날씨 알림 플랫폼</h4>
            <p>날씨 알림 제공 및 연락 시스템</p>
          </div>
        </div>
      </div>

      {/* Problem-Solving Experience */}
      <div className="text-center mb-4">
        <h2 className="font-medium text-3xl text-gray-800">Problem-Solving Experience</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8"></div>

      <div className="flex gap-12 mb-8">
        <div className="flex-none w-80">
          <h3>문제해결 경험</h3>
          <p>개발 과정에서 마주한 다양한 기술적 도전과 해결 과정을 기록한 노션 페이지입니다.</p>
        </div>

        <div className="flex-1">
          <h4>주요 내용:</h4>
          <ul>
            <li>트러블슈팅 사례 및 해결 방법</li>
            <li>성능 최적화 경험</li>
            <li>아키텍처 개선 사례</li>
            <li>디버깅 및 문제 해결 과정</li>
          </ul>
          <p><a href="https://www.notion.so/75a120158a584d4aae253bdc1e5164e0" target="_blank" rel="noopener noreferrer">📖 노션 페이지 보기</a></p>
        </div>
      </div>

      {/* Experience */}
      <div className="text-center mb-4">
        <h2 className="font-medium text-3xl text-gray-800">Experience</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8"></div>

      <div className="flex gap-12 mb-8">
        <div className="flex-none w-80">
          <h3>POXI (폭시)</h3>
          <p><strong>2025.03 ~ 현재</strong></p>
          <p><a href="https://www.poxi.com/" target="_blank" rel="noopener noreferrer">https://www.poxi.com/</a></p>
        </div>

        <div className="flex-1">
          <h4>주요 프로젝트:</h4>
          <ul>
            <li><strong>체육 앱 플랫폼</strong>: Flutter 기반 모바일 앱 개발 및 NestJS 백엔드 API 구축</li>
            <li><strong>스마트 픽업 웹 서비스</strong>: React/TypeScript 프론트엔드 및 Node.js 백엔드 개발</li>
            <li><strong>부동산 앱 플랫폼</strong>: 풀스택 개발 및 데이터베이스 설계</li>
            <li><strong>여행기 앱 서비스</strong>: 모바일 앱 및 웹 서비스 통합 개발</li>
          </ul>

          <h4>주요 성과:</h4>
          <ul>
            <li>테스트 코드 작성 및 코드 리뷰 프로세스 구축</li>
            <li>클린 아키텍처 기반 아키텍처 개선으로 개발 효율성 향상</li>
            <li>개발 환경 개선 및 CI/CD 파이프라인 최적화</li>
          </ul>
        </div>
      </div>

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
