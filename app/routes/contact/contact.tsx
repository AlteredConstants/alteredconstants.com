import "~/styles/contact.css";
import { MainSection } from "~/components/MainSection";
import blueskyIcon from "./bluesky.svg";
import facebookIcon from "./facebook.png";
import linkedinIcon from "./linkedin.png";
import twitterIcon from "./twitter.png";
import vimeoIcon from "./vimeo.png";
import youtubeIcon from "./youtube.png";

export default function Contact() {
	return (
		<>
			<title>Contact Altered Constants</title>

			<MainSection title="Contact">
				<p>
					The best place to contact me is probably Bluesky{" "}
					<a href="https://bsky.app/profile/alteredconstants.com">
						@alteredconstants.com
					</a>
					.
				</p>
				<p>Other options include:</p>
				<ul className="contact-links">
					<li>
						<a href="https://bsky.app/profile/alteredconstants.com">
							<img
								src={blueskyIcon}
								width={32}
								height={32}
								alt="Bluesky"
								title="Bluesky"
							/>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/AltConsts">
							<img
								src={twitterIcon}
								width={32}
								height={32}
								alt="Twitter"
								title="Twitter"
							/>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/zeff.svoboda">
							<img
								src={facebookIcon}
								width={32}
								height={32}
								alt="Facebook"
								title="Facebook"
							/>
						</a>
					</li>
					<li>
						<a href="http://www.linkedin.com/pub/zeff-svoboda/b/316/297">
							<img
								src={linkedinIcon}
								width={32}
								height={32}
								alt="LinkedIn"
								title="LinkedIn"
							/>
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/user/AlteredConstants">
							<img
								src={youtubeIcon}
								width={32}
								height={32}
								alt="YouTube"
								title="YouTube"
							/>
						</a>
					</li>
					<li>
						<a href="http://vimeo.com/alteredconstants">
							<img
								src={vimeoIcon}
								width={32}
								height={32}
								alt="Vimeo"
								title="Vimeo"
							/>
						</a>
					</li>
				</ul>
			</MainSection>
		</>
	);
}
