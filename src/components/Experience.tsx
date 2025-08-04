export default function Experience() {
    return (
        <>

            <div className="text-left mb-4 mt-8">
                <h2 className="font-medium text-3xl text-gray-800">Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <div className="flex gap-12 mb-8">
                <div className="flex-none w-80">
                    <p className="text-gray-400 italic mt-20 ml-2"><strong>POXI (폭시)</strong></p>
                    <p className="text-gray-400 italic ml-2"><strong>2025.03 ~ 현재</strong></p>
                    <p className="text-gray-400 italic ml-2"><a href="https://www.poxi.com/" target="_blank" rel="noopener noreferrer"><strong>https://www.poxi.com/</strong></a></p>
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

        </>
    );
}