import React from 'react';
import { Link } from 'react-router-dom';

const Error403 = () => (
  <div className="error">
    <div className="content">
      <h1>404</h1>
      <div className="desc">404 Error Page</div>
      <div className="actions">
        <Link to="/">
          <button type="button">Back to Home</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Error403;
