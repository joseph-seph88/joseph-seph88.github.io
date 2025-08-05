export default function Experience() {
    return (
        <>
            <div className="text-left mb-4 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 mt-2 ml-2">POXI (폭시)</p>
                    <p className="text-sm text-gray-400 italic ml-2 mb-2"><a href="https://www.poxicorp.com/" target="_blank" rel="noopener noreferrer"><strong>https://www.poxicorp.com/</strong></a></p>
                    <p className="font-bold text-sm text-gray-700 ml-2">Flutter&NestJS 앱/서버 개발자</p>
                    <p className="font-medium text-sm text-gray-600 ml-2">2025.03 ~ 현재</p>
                </div>

                <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2">
                        <li> 체육관, 차량픽업, 부동산 서비스 등 Flutter 기반 모바일 앱/웹 개발 참여</li>
                        <li> NestJS 백엔드 API 모듈화 개발 참여</li>
                        <li> 아키텍처, 네이밍 규칙, 코드 컨벤션, Git PR 프로세스 등 개발 환경 전반에 대해 개선 제안 및 주도 </li>
                        <li> 런타임 에러, Fatal, 기능 이슈 등 에러 분석 및 대응</li>
                    </ul>
                </div>
            </div>

        </>
    );
}