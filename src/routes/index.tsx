import { t } from "@lingui/core/macro";
import { Select, Trans } from "@lingui/react/macro";
import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const totalPrice = "$199";

	const introductoryPricePeriod = "month";

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
				<p>
					<Trans>Text that should be translated</Trans>
				</p>
				<p>
					<Trans>
						Invest with confidence. Keep reading with Premium. Now{" "}
						<span className="font-bold text-orange-60">only {totalPrice}</span>{" "}
						for your first{" "}
						<Select
							_day="day"
							_halfYear="half year"
							_month="30 days"
							_quarter="quarter"
							_week="week"
							_year="year"
							value={introductoryPricePeriod}
						/>
						.
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
