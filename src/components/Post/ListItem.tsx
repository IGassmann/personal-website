import React from 'react';
import { LiComponent } from 'react-markdown/lib/ast-to-react';

const ListItem: LiComponent = ({ children }) => (
  <>
    <li>{children}</li>
    <style jsx>{`
      li:before {
        content: '-';
        padding-right: 8px;
      }
    `}</style>
  </>
);

export default ListItem;
