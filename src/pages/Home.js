import React from "react";

function Home() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h1 className="mb-2">Selamat Datang di THQ</h1>
                <h4>Tempat membaca Al-Quran online terbaik.</h4>
            </div>
            <div className="flex justify-end mb-10 mr-4">
                <p className="font-arabic text-4xl lg:text-5xl leading-[120px]" dir="rtl" lang="ar">
                    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                </p>
            </div>
        </div>
    );
}

export default Home;