import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'

let dataPost = [
    { id: 1, message: "Hello world", image: "https://im0-tub-ru.yandex.net/i?id=7abd6330d0e762b7004822896c8ab501&n=13&exp=1", like: 46, alt: "icon" },
    { id: 2, message: "It's my life", image: "https://i.pinimg.com/originals/ae/1e/e3/ae1ee36bc38cebcc8d3d9f1691b715dd.jpg", like: 86, alt: "icon" },
    { id: 3, message: "Show must go on", image: "https://im0-tub-ru.yandex.net/i?id=4665761d0e170bec4bc26d3d37d09b34&n=13&exp=1", like: 88, alt: "icon" },
    { id: 4, message: "Whenever", image: "https://im0-tub-ru.yandex.net/i?id=29d9d1e851b7371776fdef36cdcc3c20&n=13&exp=1", like: 27, alt: "icon" }
]

let content = dataPost.map((variable) => {
    return (
        <Post message={variable.message} image={variable.image} like={variable.like} alt={variable.alt} />
    )
})

const Posts = () => {
    return (
        <div className={classes.description}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { content }
            </div>
        </div>
    )
}

export default Posts