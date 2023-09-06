import React, { useState } from 'react';
import quran from '../assets/images/quran.svg';
import { Link } from 'react-router-dom';

function SurahSquare(props) {
	return (
		<Link
			to={'/baca-alquran/surah/' + props.nomor}
			className="group relative block h-32 sm:h-40 lg:h-56"
		>
			<span className="absolute inset-0 border-2 border-dashed border-black"></span>

			<div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform duration-500 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2">
				<div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
					<img
						src={quran}
						className="w-12 h-12 opacity-75"
						alt={props.namaLatin}
					/>
					<h2 className="mt-4 text-xl font-medium sm:text-2xl">
						{props.namaLatin}
					</h2>
				</div>

				<div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
					<h3 className="font-arabic text-3xl sm:text-4xl lg:text-5xl font-medium">
						{props.nama}
					</h3>

					<p className="lg:mt-10 mt-8 text-sm sm:text-base">
						{props.arti}
					</p>
				</div>

				<div className="absolute top-4 right-6 rounded-full bg-hunter text-white text-xl w-10 h-10 lg:text-2xl lg:w-12 lg:h-12 font-bold flex justify-center items-center">
					{props.nomor}
				</div>

				<div className="absolute lg:bottom-7 sm:bottom-6 bottom-4 right-8 opacity-0 transition-opacity group-hover:opacity-100">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 lg:w-8 lg:h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</div>
			</div>
		</Link>
	);
}

function SurahList(props) {
	const filterText = props.filterText.toLowerCase();
	const rows = [];

	props.surahs.forEach((surah) => {
		if (surah.name_simple.toLowerCase().indexOf(filterText) === -1) {
			return;
		}

		rows.push(
			<SurahSquare
				nomor={surah.id}
				nama={surah.name_arabic}
				namaLatin={surah.name_simple}
				arti={surah.translated_name.name}
				tempatTurun={surah.revelation_place}
				key={surah.id}
			/>
		);
	});

	return (
		<div className="max-w-[230px] sm:max-w-xl lg:max-w-6xl sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8 mx-auto">
			{rows}
		</div>
	);
}

function SearchBar(props) {
	const handleFilterTextChange = (e) => {
		props.onFilterTextChange(e.target.value);
	};

	return (
		<div className="flex items-center justify-center">
			<form className="w-[300px] sm:w-[512px] lg:w-[640px] mb-8 flex flex-col">
				<div className="relative">
					<input
						className="w-full h-10 rounded-lg border-gray-200 px-4 text-sm placeholder-gray-400 focus:z-10"
						placeholder="Search..."
						type="text"
						value={props.filterText}
						onChange={handleFilterTextChange}
					/>

					<button
						type="submit"
						className="absolute inset-y-0 right-0 rounded-r-lg p-2 text-gray-600"
					>
						<span className="sr-only">Cari</span>
						<svg
							className="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								fillRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</form>
		</div>
	);
}

function FilterableQuran(props) {
	const [filterText, setFilterText] = useState('');
	const handleFilterTextChange = (filterText) => {
		setFilterText(filterText);
	};

	return (
		<div>
			<SearchBar
				filterText={filterText}
				onFilterTextChange={handleFilterTextChange}
			/>
			<SurahList surahs={props.surahs} filterText={filterText} />
		</div>
	);
}

export default FilterableQuran;
