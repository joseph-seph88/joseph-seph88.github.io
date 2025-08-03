'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
    const [clickCount, setClickCount] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(0);

    const handleSecretClick = () => {
        const now = Date.now();

        // 3초 내에 클릭해야 연속으로 인정
        if (now - lastClickTime > 3000) {
            setClickCount(1);
        } else {
            setClickCount(prev => prev + 1);
        }

        setLastClickTime(now);

        // 10번 클릭 시 PDF 변환
        if (clickCount === 9) {
            convertToPDF();
            setClickCount(0);
        }
    };

    const convertToPDF = async () => {
        // 로컬 개발 환경에서만 PDF 변환 기능 활성화
        if (process.env.NODE_ENV === 'development') {
            try {
                // html2pdf 라이브러리 동적 로드
                const html2pdfModule = await import('html2pdf.js');
                const html2pdf = (html2pdfModule as any).default || html2pdfModule;

                // 현재 페이지의 메인 콘텐츠만 선택 (헤더 제외)
                const element = document.querySelector('.max-w-none');

                if (!element) {
                    throw new Error('변환할 요소를 찾을 수 없습니다.');
                }

                // PDF 변환용 복사본 생성
                const clone = element.cloneNode(true) as HTMLElement;

                // 복잡한 CSS 스타일 제거 (lab 색상 함수 등)
                const style = document.createElement('style');
                style.textContent = `
                    * {
                        color: #000 !important;
                        background-color: #fff !important;
                        border-color: #ccc !important;
                    }
                    .text-gray-800 { color: #1f2937 !important; }
                    .text-gray-500 { color: #6b7280 !important; }
                    .text-gray-600 { color: #4b5563 !important; }
                    .bg-gray-50 { background-color: #f9fafb !important; }
                    .border-gray-200 { border-color: #e5e7eb !important; }
                    .border-gray-500 { border-color: #6b7280 !important; }
                `;
                clone.appendChild(style);

                const opt = {
                    margin: [0.5, 0.5, 0.5, 0.5],
                    filename: 'joseph88-portfolio.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: '#ffffff'
                    },
                    jsPDF: {
                        unit: 'in',
                        format: 'a4',
                        orientation: 'portrait'
                    }
                };

                // PDF 생성 및 다운로드
                await html2pdf().set(opt).from(clone).save();

                console.log('PDF 변환 성공!');
            } catch (error) {
                console.error('PDF 변환 실패:', error);
                alert('PDF 변환에 실패했습니다. 다시 시도해주세요.');
            }
        } else {
            // 프로덕션 환경에서는 간단한 메시지
            alert('🎉 이스터 에그 발견! PDF 변환 기능은 로컬 개발 환경에서만 사용 가능합니다.');
        }
    };

    // 3초 후 클릭 카운트 리셋
    useEffect(() => {
        if (clickCount > 0) {
            const timer = setTimeout(() => {
                setClickCount(0);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [clickCount]);

    return (
        <footer className="mt-16 py-8 border-t border-gray-200">
            <div className="text-center">
                <div
                    className="inline-block cursor-pointer select-none"
                    onClick={handleSecretClick}
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#666',
                        transition: 'all 0.2s ease',
                        userSelect: 'none'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.color = '#333';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.color = '#666';
                    }}
                >
                    JOSEPH88
                </div>
            </div>
        </footer>
    );
} 