import React from "react";

function Home() {
    return (
        <div className="flex justify-between">
            <div>
                <h1 className="mb-2">Selamat Datang di THQ</h1>
                <h4>Tempat membaca Al-Quran online terbaik.</h4>
            </div>
            <div className="flex justify-center mb-10">
                <p className="text-5xl" dir="rtl" lang="ar">
                    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                </p>
            </div>
        </div>
    );
}

export default Home;