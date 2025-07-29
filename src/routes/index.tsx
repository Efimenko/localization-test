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

	const paymentMethodType = "cc";

	const priceFormatted = "$199.00";

	const basePriceFormatted = "$299.00";

	const billingPeriod = "annual";

	return (
		<div className="text-center">
			<header className="min-h-screen bg-[#282c34] text-white text-[calc(10px+2vmin)]">
				<div className="max-w-2/4 mx-auto flex flex-col items-center justify-center">
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
							Random English text goes here for demonstration purposes.
						</Trans>
					</p>
					<br />
					<p>
						<Trans>
							Invest with confidence. Keep reading with Premium. Now{" "}
							<span className="font-bold text-orange-60">
								only {totalPrice}
							</span>{" "}
							for your first{" "}
							<Select
								_day="day"
								_halfYear="half year"
								_month="30 days"
								_quarter="quarter"
								_week="week"
								_year="year"
								_other=""
								value={introductoryPricePeriod}
							/>
							.
						</Trans>
					</p>
					<br />
					<p>
						<Trans comment="premium terms and conditions: no trial, annual or three-year">
							I acknowledge my{" "}
							<Select
								_cc="credit card"
								_pp="PayPal account"
								other=""
								value={paymentMethodType}
							/>{" "}
							will be charged {priceFormatted} immediately for{" "}
							<Select
								_annual="an annual"
								_three_year="a three-year"
								other=""
								value={billingPeriod}
							/>{" "}
							subscription to Premium. I further acknowledge that my
							subscription will auto-renew as{" "}
							<Select
								_annual="an annual"
								_three_year="a three-year"
								other=""
								value={billingPeriod}
							/>{" "}
							subscription at the then current{" "}
							<Select
								_annual="annual list price"
								_three_year="list price for a three-year subscription"
								other=""
								value={billingPeriod}
							/>{" "}
							(current list price is {basePriceFormatted}
							<Select _annual="/year" other="" value={billingPeriod} />) until I
							cancel. Plus sales tax/VAT, where applicable. See more information
							regarding cancellations <a href="#faq">here</a>.
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
				</div>
			</header>
		</div>
	);
}
