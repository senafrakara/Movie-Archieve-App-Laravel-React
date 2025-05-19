import React from 'react';
import Header from '@components/Header';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#4d0e02]">
            <Header />
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
} 