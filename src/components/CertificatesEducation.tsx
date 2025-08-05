export default function CertificatesEducation() {
    return (
        <div>
            <div className="text-left mb-4 mt-20">
                <h2 className="font-bold text-3xl text-gray-700">Certificates & Education</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 mt-10 ml-2">Certificates</p>
                </div>
                <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2">
                        <li className="font-medium"> 정보처리기사 </li>
                        <li className="font-medium"> 네트워크 관리사 2급</li>
                        <li className="font-medium"> C/Python Embedded 개발 부트캠프 수료 </li>
                        <li className="font-medium"> Flutter App 개발 부트캠프 수료</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 mt-4 ml-2">Education</p>
                </div>
                <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2">
                        <li className="font-medium"> 정보통신공학 학사 </li>
                        <li className="font-medium"> 실용음악학 학사</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}