import React from 'react';
import {Link} from "react-router-dom";

function PostCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/posts/${props.post.id}`}>
                <div className="font-bold cursor-pointer">
                    {props.post.title}
                </div>
            </Link>
            <div>
                {props.post.body}
            </div>
            <Link
                to={`/posts/${props.post.id}`}
                className="bg-blue-500 text-white p-2 flex justify-center"
            >
                View
            </Link>
        </div>
    );
}

export default PostCard;