export default function Project() {
    return (
        <>
            <div className="text-left mb-4 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Project</h2>
            </div>

            <div className="border-b-2 border-gray-200 mb-8"></div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 mt-2 ml-2">한국 소프트웨어 교육원 (KOSTA)</p>
                    <p className="font-bold text-sm text-gray-700 ml-2">IoT시스템과 보안기술을 위한 C개발자 양성 클래스 수료</p>
                    <p className="font-medium text-sm text-gray-600 ml-2">2024.3 - 2024.7</p>
                </div>
                <div className="flex-1">
                    <p className="font-bold text-l text-gray-700 ">임베디드 자율 주행 프로젝트 개발</p>
                    <p className="font-bold text-sm text-gray-400 italic">#C #Python #FastAPI #OpenCV #WebSocket #Firmware
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> 미니카 자율주행 시스템 Firmware 개발 </li>
                        <li> OpenCV를 이용한 이미지 처리 및 MPEG 압축 구현 </li>
                        <li> WebSocket 기반 실시간 양방향 통신 </li>
                        <li> Uvicorn과 FastAPI를 이용한 서버 구현 </li>
                    </ul>
                    <br />
                </div>
            </div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60 mt-20">
                    <p className="font-bold text-xl text-gray-700 mt-2 ml-2">엘리스 트랙</p>
                    <p className="font-bold text-sm text-gray-700 ml-2">Flutter 앱 개발 부트캠프 수료</p>
                    <p className="font-medium text-sm text-gray-600 ml-2">2024.10 - 2025.3</p>
                </div>

                <div className="flex-1">
                    <p className="font-bold text-l text-gray-700 ">패션 SNS 플랫폼 프로젝트 개발</p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #Riverpod #SqfLite #Firebase #NodeJS
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> UI/UX 설계 문서 작성 주도 및 팀장 역할 수행  </li>
                        <li> Firebase Auth, Token, SharedPreference 등 로그인 및 회원가입 기능 구현 </li>
                        <li> SqfLite, Firebase, NodeJS 기반 온오프라인 채팅 기능 구현 </li>
                    </ul>
                    <br />

                    <p className="font-bold text-l text-gray-700 ">중고 거래 플랫폼 프로젝트 개발</p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #Riverpod #CleanArchitecture #Firebase
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> UI/UX 디자인 및 브랜딩(로고, 서비스명) 설계 </li>
                        <li> Firebase와 Naver/Google Map API 기반 지도 기능 구현 </li>
                    </ul>
                </div>

            </div>
        </>
    );
}


