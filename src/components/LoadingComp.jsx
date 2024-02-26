import React from 'react';

export default function LoadingComp() {
  return (
    <div className="row">
      <div className="col container d-flex justify-content-center p-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    </div>
  );
}
