import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => (
  <div className="text-center bg-light shadow-sm rounded">
    <div className="col-md-12 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Page Not Found</h1>
      <Link className="btn btn-info btn-lg" to="/">
        Go Home
      </Link>
    </div>
  </div>
);

export default Notfound;
