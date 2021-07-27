import { useState } from "react";
import { Alert } from "reactstrap";
import ContactModal from "./ContactModal";

const Header = () => {
  const [msg, setMsg] = useState(null);

  const onDismiss = () => setMsg(null);

  const handleMsg = (data) => {
    setMsg(data);
  };

  return (
    <div id="main-header">
      {msg && msg.type === "success" ? (
        <Alert color="primary" toggle={onDismiss}>
          {msg.msg}
        </Alert>
      ) : null}
      {msg && msg.type === "error" ? (
        <Alert color="danger" toggle={onDismiss}>
          {msg.msg}
        </Alert>
      ) : null}
      <h1>
        <span className="my-name">David Simmons </span>| Web Developer
      </h1>
      <div className="header-buttons">
        <ContactModal handleMsg={handleMsg} />
        <a
          href="https://github.com/d-simmons925"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
