import React from 'react';
import Footer from './Footer';

const SingleColumnLayout: React.FC = ({ children }) => (
  <div className="max-w-[1019px] my-xxl mx-auto px-l sm:px-xxl">
    <main>{children}</main>
    <Footer />
  </div>
);

export default SingleColumnLayout;
