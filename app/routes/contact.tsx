import "~/styles/contact.css";

import { MainSection } from "~/components/MainSection";

export default function Contact() {
  return (
    <>
      <title>Contact Altered Constants</title>

      <MainSection title="Contact">
        <p>
        The best place to contact me is probably Twitter{" "}
        <a href="https://twitter.com/AltConsts">@AltConsts</a>.
        </p>
        <p>Other options include:</p>
        <ul className="contact-links">
          <li>
            <a href="https://twitter.com/AltConsts">
              <img
                src="/static/img/social-icons/twitter.png"
                alt="Twitter"
                title="Twitter"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/zeff.svoboda">
              <img
                src="/static/img/social-icons/facebook.png"
                alt="Facebook"
                title="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/pub/zeff-svoboda/b/316/297">
              <img
                src="/static/img/social-icons/linkedin.png"
                alt="LinkedIn"
                title="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/AlteredConstants">
              <img
                src="/static/img/social-icons/youtube.png"
                alt="YouTube"
                title="YouTube"
              />
            </a>
          </li>
          <li>
            <a href="http://vimeo.com/alteredconstants">
              <img
                src="/static/img/social-icons/vimeo.png"
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
