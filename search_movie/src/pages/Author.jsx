import React from 'react';
import AuthorCard from '../components/AuthorCard'

const Author = () => {

    return (
        <div className='authorWrapper'>
            <div className="authorHeader">
                <h1>About Author</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates cum, nobis facere, corporis, voluptatum maxime at sunt quidem repellat sequi iure natus voluptatem error iste. Libero omnis at dicta cum accusantium voluptas autem vitae asperiores sint.</p>
            </div>
            <div className="authorBody">
                <AuthorCard />
            </div>
        </div>
    )
}

export default Author
