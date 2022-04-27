import React from "react";
import { Link } from "react-router-dom";

const ReplyList = ({ replies }) => {
  console.log(replies);
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Replies</span>
      </div>
      <div className="card-body">
        {replies &&
          replies.map((reply) => (
            // two siblings as one component
            <div key={reply._id}>
              <p className="pill mb-3">
                {reply.replyBody}
              </p>
              <Link
                to={`/profile/${reply.username}`}
                style={{ fontWeight: 700 }}
              >
                {reply.username} on {reply.createdAt}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReplyList;
