import React from 'react';
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/HttpRequests";
import PostCard from "../Components/PostCard";

function Posts() {
    let content = null;

    const url = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`;
    let posts = useAxiosGet(url);

    if (posts.error) {
        content = <p>
            There was an error. Please refresh or try again later
        </p>
    }

    if (posts.loading) {
        content = <Loader/>
    }

    if (posts.data) {
        content =
            posts.data.map((post) =>
                <div key={post.id}>
                    <PostCard
                        post={post}
                    />
                </div>)
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Blog Post
            </h1>
            {content}
        </div>
    );
}

export default Posts;