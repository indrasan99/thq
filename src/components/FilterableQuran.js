import React from "react";
import quran from "../assets/images/quran.svg";
import { Link } from "react-router-dom";

function Surah(props) {
    return (
        <Link to={'/baca-alquran/surah/' + props.nomor} className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div
                className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
                <div
                    className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                    <img
                        src={quran}
                        className="w-12 h-12 opacity-75"
                        alt="beli al-quran"
                    />
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        { props.nomor + '. '} {props.namaLatin}
                    </h2>
                </div>

                <div
                    className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        {props.namaLatin}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base">
                        {props.arti}
                    </p>

                    <p className="mt-8 font-bold">Baca sekarang</p>
                </div>
            </div>
        </Link>
    );
}

class SurahList extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const rows = [];

        this.props.surahs.forEach((surah) => {
            if (surah.namaLatin.indexOf(filterText) === -1) {
                return;
            }

            rows.push(
                <Surah
                    namaLatin={surah.namaLatin}
                    arti={surah.arti}
                    nomor={surah.nomor}
                    key={surah.nomor}
                />
            )
        })

        return (
            <div className="max-w-[230px] sm:max-w-xl lg:max-w-6xl sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8 mx-auto">
                {rows}
            </div>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <div className="flex items-center">
                <form className="max-w-[250px] sm:max-w-xl lg:max-w-6xl mb-8 flex flex-col">
                    <div className="relative">
                        <input
                            className="w-full h-10 rounded-lg border-gray-200 px-4 text-sm placeholder-gray-400 focus:z-10"
                            placeholder="Search..."
                            type="text"
                            value={this.props.filterText}
                            onChange={this.handleFilterTextChange}
                        />

                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 rounded-r-lg p-2 text-gray-600"
                        >
                            <span className="sr-only">Submit Search</span>
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
}
function PageTitle(props) {
    return (
        <>
            <h1 className="mb-4">{props.title}</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nulla saepe autem praesentium impedit cupiditate molestiae magni consectetur labore, similique tenetur minus sed explicabo culpa cumque dolorem error fuga qui laboriosam ipsa.
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://indrasan99.github.io">
                    content
                </a>
            </p>
        </>
    );
}

class FilterableQuran extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div>

                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <SurahList
                    surahs={this.props.surahs}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}

export default FilterableQuran;