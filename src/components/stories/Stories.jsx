import React, { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../../context/authContext';
const Stories = () => {
    const {currentUser}=useContext(AuthContext);
    const stories = [
        {
            id: 1,
            name: "Baman Boi",
            img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
        },
        {
            id: 2,
            name: "Baman Boi",
            img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
        },
        {
            id: 3,
            name: "Baman Boi",
            img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
        },
        {
            id: 4,
            name: "Baman Boi",
            img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
        },
    ];
    return (
        <div className='stories'>
            <div className="story">
                    <img src={currentUser.profilePicture} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories
