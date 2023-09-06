import React from 'react';

function Atribusi() {
	return (
		<div>
			<h3 className="mt-6 mb-12 text-4xl lg:text-5xl flex justify-end font-arabic">
				اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
			</h3>
			<h4 className="mb-2">API Sources</h4>
			<ul className="ml-6 list-disc">
				<li>
					<a
						href="https://quran.api-docs.io/v4"
						target="_blank"
						rel="noreferrer"
						className="hover:underline"
					>
						Quran.com API
					</a>
				</li>
				<li>
					<a
						href="https://equran.id/apidev"
						target="_blank"
						rel="noreferrer"
						className="hover:underline"
					>
						EQuran.id API
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Atribusi;
