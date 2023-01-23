import { Link } from "@remix-run/react";

function SocialLinks() {
  return (
    <>
      <Link to="/servicos">
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
      <Link to="/servicos">
        <i className="fa-brands fa-linkedin"></i>
      </Link>
      <Link to="/servicos">
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link to="/servicos">
        <i className="fa-brands fa-instagram"></i>
      </Link>
    </>
  );
}

export { SocialLinks };
