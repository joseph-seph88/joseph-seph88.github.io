import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="text-center mb-4">
        <h2 className="font-medium text-3xl text-gray-800">About Me</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8"></div>

      <div className="flex items-start gap-8 mb-8">
        <Image
          src="/assets/images/totoro.png"
          alt="Profile Image"
          width={250}
          height={250}
          className="flex-shrink-0 object-cover rounded-lg"
        />

        <div className="flex-1">
          <p>Flutter, Node.js/TypeScript, Python 기반의 풀스택 개발자로, 체육 앱 플랫폼, 스마트 차량 픽업 웹, 부동산 앱 플랫폼 등 다양한 서비스의 프론트엔드 및 백엔드 개발을 담당했습니다.</p>

          <p>클린 아키텍처와 모듈화를 통해 개발 효율성과 코드 유지보수성을 향상시키는 것을 중요시하며, 깔끔하고 효율적인 코드 작성을 지향합니다. 지속적인 학습과 기술 발전을 통해 성장하는 개발자입니다.</p>

          <p><strong>개발 철학 & 구현 방법:</strong></p>
          <ol>
            <li><strong>아키텍처 설계</strong>: "확장성보다는 유지보수성을 우선시한다. 과도한 추상화보다는 명확하고 이해하기 쉬운 구조가 더 중요하다고 생각한다."
              <br /><em>구현: SOLID 원칙 적용, 의존성 주입, 인터페이스 분리, 단일 책임 원칙으로 모듈화</em>
            </li>
            <li><strong>에러 처리</strong>: "사용자가 에러를 느끼지 못하는 것이 최고의 에러 처리다. 예측 가능한 실패 지점을 사전에 방어하는 것이 핵심이다."
              <br /><em>구현: Try-catch 블록, 에러 바운더리, 폴백 UI, 사용자 친화적 에러 메시지</em>
            </li>
            <li><strong>DB 설계</strong>: "정규화와 성능 사이의 균형이 중요하다. 하지만 데이터 일관성은 절대 타협할 수 없는 부분이다."
              <br /><em>구현: 트랜잭션 관리, 인덱스 최적화, 정규화된 스키마, 읽기/쓰기 분리</em>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
} 