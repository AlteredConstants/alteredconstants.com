import { MainSection } from "~/components/MainSection";

export default function Index() {
	return (
		<>
			<MainSection title="The Basics">
				<p>
					My name's Zeff Svoboda.{" "}
					<a href="https://github.com/AlteredConstants">I write code.</a>
				</p>
				<p>
					I decided I needed another website all to myself. This is that
					website.
				</p>
			</MainSection>
			<MainSection title="Incomplete">
				<p>
					Like all the great websites at the turn of the century, this site is
					"under construction" and will likely be so indefinitely. I hope for it
					to be a repository for my various personal projects (software, video,
					and whatever else) as well as a portfolio of my general work
					experience. I see two approaches to that goal: hide behind a
					non-descript splash page until I've finished my masterpiece, or put
					something (anything) out there for scrutiny. Let's see how the latter
					goes.
				</p>
			</MainSection>
		</>
	);
}
