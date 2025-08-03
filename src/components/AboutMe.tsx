import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="text-left mb-2">
        <h2 className="font-thin text-3xl text-gray-800 ml-70">About Me</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8 ml-70"></div>

      <div className="flex items-start gap-8 mb-8">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl border-2 border-gray-300 mt-4">
          <Image
            src="/assets/images/totoro.png"
            alt="Profile Image"
            width={250}
            height={250}
            className="flex-shrink-0 object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <p><strong>Flutter & Dart</strong>와 <strong>NestJS & TypeScript</strong> 기반의 풀스택 개발자로,
            체육관 플랫폼 앱, 스마트 차량 픽업 웹, 부동산 플랫폼 앱 등 다양한 서비스의 프론트엔드 및 백엔드 개발에 참여했습니다.
          </p>

          <p>또한 <strong>Python</strong>과 <strong>NextJS</strong>를 활용한 개발 경험이 있으며,
            다양한 기술 스택의 구조와 패턴에 대한 이해를 바탕으로 유연하게 문제를 해결해나가는 개발자입니다.
          </p>

          <br />

          <p className="text-gray-400 italic"><strong>클린 아키텍처와 모듈화, 역할과 책임의 명확성</strong></p>
          <p>
            클린 아키텍처는 역할과 책임을 명확히 분리해 유지보수성과 개발 효율을 높입니다.
            구조는 도메인, 데이터, 프레젠테이션 세 레이어로 나뉘며, 각각 핵심 비즈니스 로직, 외부 데이터 처리, UI 역할을 담당합니다.
            특히 <strong>의존 흐름을 바깥에서 안쪽(도메인)으로만 제한해 도메인이 외부 변화에 영향을 받지 않도록</strong> 하는 점이 핵심입니다.
            그 결과 요구사항 변경 시 도메인 로직은 안정적으로 유지되며, <strong>수정 범위도 최소화</strong>할 수 있습니다.
            또한 <strong>문제를 빠르게 파악</strong>하고 <strong>팀원 간 일관된 개발 문화를 조성</strong>해 협업과 소통을 원활하게 하는 기반이 됩니다.
          </p>

          <br />

          <p className="text-gray-400 italic"><strong>개발 환경에 따른 에러 처리 전략</strong></p>
          <p>
            사용자 인터랙션이 복잡한 Flutter에서는 <strong>레이어별 책임에 따른 에러 처리</strong>가 현실적이라고 보며,
            NestJS처럼 요청 흐름이 명확한 서버 환경에서는 <strong>중앙 집중적인 에러 핸들링</strong>이 훨씬 효과적이라 생각합니다.
          </p>
        </div>
      </div>
    </>
  );
} 