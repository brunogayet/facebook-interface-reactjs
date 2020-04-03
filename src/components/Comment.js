import React from 'react';

function Comment({id, author, content}) {
  return (
    <div key={id} className="comment">
      <img className="avatar" src={author.avatar} />
      <p>
        <span>{author.name}</span>
        {content}
      </p>
    </div>
  )
}

export default Comment;