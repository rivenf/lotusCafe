import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href="https://www.x.com" target="_blank">
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </a>
      </div>
      <p>Lotus Cafe 2024</p>
      <p>
        1234 Placeholder St.
        <br />
        Baltimore, MD 12345
        <br />
        (987) 654-3210
        <br />
      </p>
    </footer>
  );
}
