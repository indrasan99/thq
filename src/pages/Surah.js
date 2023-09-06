import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SURAH_ID_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';
import bookmark from '../assets/images/bookmark.svg';

function Surah() {
	const [surah, setState] = useState([]);
	const param = useParams();

	const toggleBookmark = (nomor) => {
		if (localStorage.getItem('BookmarkAyat') !== null) {
			localStorage.removeItem('BookmarkAyat');
		} else {
			localStorage.setItem(
				'BookmarkAyat',
				JSON.stringify({ noSurat: surah.nomor, noAyat: nomor })
			);
		}
	};

	useEffect(() => {
		localStorage.getItem('BookmarkAyat');

		axios.get(SURAH_ID_URL + param.nomor).then((response) => {
			setState(response.data.data);
		});
	}, [param.nomor]);

	const ayahs = surah.ayat;
	if (!ayahs) return null;

	const listItem = ayahs.map((ayah) => (
		<div className="w-full py-4 ml-auto mb-4" key={ayah.nomorAyat}>
			<div className="flex justify-end">
				<div className="w-full mt-1 py-4 mr-4">
					<p
						dir="rtl"
						className="font-arabic leading-[80px] sm:leading-[100px] lg:leading-[120px] flex text-4xl sm:text-5xl lg:text-6xl text-gray-700 mb-6 pb-6 border-dashed border-b border-b-hunter"
					>
						{ayah.teksArab}
					</p>

					<p className="flex justify-start text-lg text-gray-700 mb-6 pb-6 border-dashed border-b border-b-hunter">
						{ayah.teksLatin}
					</p>
					<p className="flex justify-start text-lg text-gray-700 pb-6 border-dashed border-b border-b-hunter">
						{ayah.teksIndonesia}
					</p>
				</div>

				<div id={ayah.nomorAyat} className="flex flex-col">
					<div className="flex justify-center py-4">
						<div className="rounded border border-hunter bg-hunter px-3 py-1.5 text-lg font-medium text-white">
							#{ayah.nomorAyat}
						</div>
					</div>

					<div className="flex justify-center items-center">
						<div
							className="grid h-8 w-8 shrink-0 place-content-center rounded-full border-2 border-hunter"
							aria-hidden="true"
						>
							<div className="flex items-center">
								<AudioPlayer source={ayah.audio['05']} />
							</div>
						</div>
					</div>
					<div className="py-4">
						<img
							onClick={toggleBookmark(ayah.nomorAyat)}
							src={bookmark}
							alt="Bookmark ayah Al-Quran"
							className={`h-6 w-6 mx-auto cursor-pointer ${
								localStorage.getItem('BookmarkAyat') != null
									? 'text-hunter'
									: ''
							}`}
						/>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<section>
			<div className="grid grid-cols-1 py-4 pr-4 gap-6">
				<div className="pr-2">
					<div className="py-4 space-y-2">
						<div className="grid grid-cols-1 sm:grid-cols-2 relative">
							<div className="text-xl font-bold sm:text-3xl lg:text-4xl whitespace-nowrap">
								{surah.namaLatin}
							</div>

							<div
								dir="rtl"
								className="absolute -top-2 sm:-top-4 right-0 font-arabic text-3xl font-bold sm:text-5xl lg:text-6xl"
							>
								{surah.nama}
							</div>
						</div>

						<h4 className="text-base font-medium pb-4">
							{surah.arti}
						</h4>

						<div className="inline-flex -space-x-px items-center overflow-hidden rounded-md border bg-hunter shadow-sm">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="text-white w-6 h-6 ml-2"
							>
								<path
									fillRule="evenodd"
									d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
									clipRule="evenodd"
								/>
							</svg>

							<span className="inline-block px-4 py-1 text-sm font-medium text-white">
								{surah.jumlahAyat} ayat
							</span>

							<span className="inline-block px-4 py-1 text-sm font-medium text-white">
								{surah.tempatTurun}
							</span>
						</div>
					</div>

					<div className="py-4">
						<div className="text-base lg:text-xl font-bold mb-2">
							Dengarkan murottal
						</div>
						<audio
							className="max-w-xl w-full"
							controls
							loop={false}
						>
							<source src={surah.audioFull['05']} />
						</audio>
					</div>

					<div className="py-4">
						<div>
							<div
								className="leading-10"
								dangerouslySetInnerHTML={{
									__html: surah.deskripsi,
								}}
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col py-4">
					<div className="text-xl lg:text-2xl font-bold mb-6">
						Baca atau dengarkan ayat demi ayat
					</div>

					{listItem}
				</div>
			</div>
		</section>
	);
}

export default Surah;
