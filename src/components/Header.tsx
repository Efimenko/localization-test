import { Trans } from "@lingui/macro";
import { Link } from "@tanstack/react-router";
import { useLocale } from "../contexts/LocaleContext";

export default function Header() {
	const { setLocale } = useLocale();

	return (
		<header className="p-2 flex gap-2 bg-white text-black justify-between">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/">
						<Trans>Home</Trans>
					</Link>
				</div>
			</nav>
			<div className="flex gap-2">
				<button
					type="button"
					onClick={() => setLocale("en")}
					className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					EN
				</button>
				<button
					type="button"
					onClick={() => setLocale("es")}
					className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					ES
				</button>
			</div>
		</header>
	);
}
