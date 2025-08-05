'use client';

import { useState } from 'react';

export default function Footer() {
    const [clickCount, setClickCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount >= 8) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                setClickCount(0);
            }, 3000);
        }
    };

    return (
        <footer className="mt-20 py-8 border-t border-gray-200">
            <div className="text-center">
                <div
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#666'
                    }}
                >
                    <span
                        className="cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{ display: 'inline-block' }}
                        onClick={handleClick}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLElement;
                            if (target) target.textContent = '⬇️';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLElement;
                            if (target) target.textContent = '📋';
                        }}
                    >
                        📋
                    </span> JOSEPH88
                </div>

                {showMessage && (
                    <div className="mt-4 text-gray-500 font-bold">
                        🐱 사용자 인증 거부
                    </div>
                )}
            </div>
        </footer>
    );
} 