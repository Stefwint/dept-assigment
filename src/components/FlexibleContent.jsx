import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Tiles from './FlexibleContent/Tiles';
import TilesFeatured from './FlexibleContent/TilesFeatured';
import Quote from './FlexibleContent/Quote';
import Clients from './FlexibleContent/Clients';
import Contact from './FlexibleContent/Contact';

const FlexibleContent = ({ layouts }) => {
  return (
    <>
      {layouts &&
        layouts.map(layout => {
          switch (layout.name) {
            case 'tiles':
              return <Tiles key={uuid()} {...layout} />;

            case 'tilesFeatured':
              return <TilesFeatured key={uuid()} {...layout} />;

            case 'quote':
              return <Quote key={uuid()} {...layout} />;

            case 'clients':
              return <Clients key={uuid()} {...layout} />;

            case 'contact':
              return <Contact key={uuid()} {...layout} />;

            default:
              console.warn('missing layout for', layout.name);
              return null;
          }
        })}
    </>
  );
};

FlexibleContent.propTypes = {
  layouts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FlexibleContent;
