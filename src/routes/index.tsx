import { useLocale } from "@/contexts/LocaleContext";
import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { locale } = useLocale();
	console.log("Current locale:", locale);
	return (
		<div className="text-center">
			<header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
				<img
					src={logo}
					className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
					alt={t`logo`}
				/>
				<p>
					<Trans>
						Edit <code>src/routes/index.tsx</code> and save to reload.
					</Trans>
				</p>
				<a
					className="text-[#61dafb] hover:underline"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Trans>Learn React</Trans>
				</a>
				<a
					className="text-[#61dafb] hover:underline"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Trans context="another-context">Learn React</Trans>
				</a>
				<a
					className="text-[#61dafb] hover:underline"
					href="https://tanstack.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Trans>Learn TanStack</Trans>
				</a>
			</header>
		</div>
	);
}
