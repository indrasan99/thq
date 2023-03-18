import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

function Surah() {
  const [surah, setState] = useState([]);
  const nomor = useParams();

  useEffect(() => {
    fetch(API_URL + 'surat/' + nomor.nomor)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setState(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {surah.nama} / {surah.namaLatin}
          </h2>
          <p>Artinya: {surah.arti}</p>
          <p>Jumlah ayat: {surah.jumlahAyat}</p>
          <p>Tempat turun: {surah.tempatTurun}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <div dangerouslySetInnerHTML={{ __html: surah.deskripsi }} />
          </div>

          <div className="lg:py-16">
            <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex items-start sm:gap-8">
                <div
                  className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-1">
                    <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                  </div>
                </div>

                <div>
                  <strong
                    className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                  >
                    Ayat #{surah.nomor}
                  </strong>

                  <h3 className="mt-4 text-lg font-medium sm:text-xl">
                    <a href="" className="hover:underline">  </a>
                  </h3>

                  <p className="mt-1 text-sm text-gray-700">

                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Surah;