import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useParams }  from 'react-router-dom'

function Posts(props) {
    const {id} = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const [post, setPost] = useState(null);

    let content = null;

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setPost(response.data);
            })
    }, [url]);

    if (post) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {post.title}
                </h1>
                <div>
                    {post.body}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default Posts;