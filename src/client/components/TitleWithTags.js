import React from 'react';
import { Link } from 'react-router-dom';

const TitleWithTags = ({ tags, isLoading }) => {
  return (
    <div className='title-header'>
      {!isLoading ? (
        <>
          <h2 className='header-row'>Some Title</h2>
          <div className='header-row'>
            {tags.map(tag => {
              return (
                <Link
                  className='header-tags'
                  key={tag[0]}
                  to={`/tema/${tag[0]}`}
                >
                  {tag[1].name}
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default TitleWithTags;
