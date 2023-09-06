import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/avatar.png';
import github from '../assets/images/github.svg';
import home from '../assets/images/home.svg';
import quran from '../assets/images/quran.svg';
import bookmark from '../assets/images/bookmark.svg';
import attribution from '../assets/images/attribution.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => setIsOpen(!isOpen);

	return (
		<nav className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
			<div
				className="w-full flex items-center h-12 place-content-center rounded-lg text-xs text-gray-600 cursor-pointer mt-6 mb-8"
				onClick={handleToggle}
			>
				<img src={logo} className="w-10 h-10" alt="logo" />
			</div>

			<Link
				to="/"
				className="sidebar-pos flex justify-center items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
			>
				<img src={home} className="w-5 h-5 opacity-75" alt="beranda" />
				<span className="text-sm font-medium">Beranda</span>
			</Link>

			<Link
				to="baca-alquran"
				className="sidebar-pos flex justify-center items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
			>
				<img
					src={quran}
					className="w-5 h-5 opacity-75"
					alt="Daftar surah Al-Quran"
				/>
				<span className="text-sm font-medium">Baca Al-Quran</span>
			</Link>

			<Link
				to="bookmark-alquran"
				className="sidebar-pos flex justify-center items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
			>
				<img
					src={bookmark}
					className="w-5 h-5 opacity-75"
					alt="Tanda terakhir baca Al-Quran"
				/>
				<span className="text-sm font-medium">Bookmark</span>
			</Link>

			<Link
				to="atribusi"
				className="sidebar-pos flex justify-center items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
			>
				<img
					src={attribution}
					className="w-5 h-5 opacity-75"
					alt="Atribusi"
				/>
				<span className="text-sm font-medium">Atribusi</span>
			</Link>

			<div className="sidebar-pos absolute inset-x-0 bottom-0 border-t border-gray-200 pt-4">
				<div className="bg-white flex flex-col justify-center items-center gap-2">
					<div
						className={`flex items-center text-gray-500 text-sm w-36 ${
							isOpen ? 'justify-start' : 'justify-center'
						}`}
					>
						<a
							href="https://indraswork.my.id"
							rel="noreferrer"
							target="_blank"
						>
							<img
								alt="Indras Avatar"
								src={avatar}
								className="h-9 w-9 rounded-full object-cover border-2 shadow-sm mr-2 hover:border-gray-400"
							/>
						</a>
						<div className={!isOpen && 'hidden'}>IndrasWork</div>
					</div>

					<div
						className={`flex items-center text-gray-500 text-sm w-36 ${
							isOpen ? 'justify-start' : 'justify-center'
						}`}
					>
						<a
							href="https://indrasan99.github.io"
							rel="noreferrer"
							target="_blank"
						>
							<img
								alt="Indras Github"
								src={github}
								className="h-9 w-9 rounded-full object-cover border shadow-sm mr-2  hover:text-gray-400"
							/>
						</a>
						<div className={!isOpen && 'hidden'}>Indras Github</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Sidebar;
