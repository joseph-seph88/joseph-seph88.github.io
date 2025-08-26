export default function OpenSource() {
    return (
        <>
            <div className="text-left mb-2 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Open-Source</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="text-gray-500 italic font-bold text-large mt-10 ml-2"><strong>catching_josh</strong></p>
                </div>
                <div className="flex-1">
                    <p><a href="https://pub.dev/packages/catching_josh" target="_blank" rel="noopener noreferrer">📦 패키지 보기</a></p>
                    <ul className="text-gray-400 italic ml-2 mt-3 space-y-1 list-disc list-inside">
                        <li>try-catch 및 console.log의 반복적인 코드 패턴 간소화</li>
                        <li>에러 처리 로직을 직관적이고 읽기 쉽게 개선</li>
                        <li>개발자의 생산성과 코드 품질을 향상</li>
                    </ul>
                </div>
            </div>
        </>
    );
}