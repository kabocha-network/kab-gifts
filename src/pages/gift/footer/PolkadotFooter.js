import { Link } from 'react-router-dom';

export default function Footer ({ className }) {
  return (
    <footer
      className={`${className} footer d-flex flex-column flex-md-row px-4`}>
      <div className="d-flex flex-column flex-sm-row">
        <div>
          © {new Date().getFullYear()} All rights reserved.
          <span className="d-none d-sm-inline">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
        <div>
          Forked from <a href="https://github.com/hamidra">Hamidra</a>. Kabochified by <a href="https://githubcom/recentration">Ramsey</a>.
          <span className="d-none d-sm-inline">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
        <div>
          <span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </span>
        </div>
      </div>
      <div className="footer-grow flex-grow-1" />
      <div>
        <strong>Questions?</strong>&nbsp;
        <a href="https://kabocha.network/" rel="noreferrer" target="_blank">Visit our support page.</a>
      </div>
    </footer>
  );
}
