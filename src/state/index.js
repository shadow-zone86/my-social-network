let renderTree = () => {}

let state = {
    profilePage: {
        dataPost: [
            { id: 1, message: "Hello world", image: "https://im0-tub-ru.yandex.net/i?id=7abd6330d0e762b7004822896c8ab501&n=13&exp=1", like: 46, alt: "icon" },
            { id: 2, message: "It's my life", image: "https://i.pinimg.com/originals/ae/1e/e3/ae1ee36bc38cebcc8d3d9f1691b715dd.jpg", like: 86, alt: "icon" },
            { id: 3, message: "Show must go on", image: "https://im0-tub-ru.yandex.net/i?id=4665761d0e170bec4bc26d3d37d09b34&n=13&exp=1", like: 88, alt: "icon" },
            { id: 4, message: "Whenever", image: "https://im0-tub-ru.yandex.net/i?id=29d9d1e851b7371776fdef36cdcc3c20&n=13&exp=1", like: 27, alt: "icon" }
        ],
        newPostText: 'Dachshund'
    },
    messagePage: {
        dataUser: [
            { id: 1, name: 'Shadow zone' },
            { id: 2, name: 'The doctor' },
            { id: 3, name: 'Wolf' },
            { id: 4, name: 'Thunder' },
            { id: 5, name: 'Porsche' }
        ],
        dataMessage: [
            { id: 1, message: 'Angular.js' },
            { id: 2, message: 'React.js' },
            { id: 3, message: 'Vue.js' }
        ],
        newMessageText: 'Dachshund'
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        image: "https://im0-tub-ru.yandex.net/i?id=a010265297fb86a07acde926f77ebc4c&n=13&exp=1",
        like: 0, 
        alt: "icon"
    }
    state.profilePage.dataPost.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export const updatePost = (newPost) => {
    state.profilePage.newPostText = newPost
    renderTree(state)
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagePage.newMessageText
    }
    state.messagePage.dataMessage.push(newMessage)
    state.messagePage.newMessageText = ''
    renderTree(state)
}

export const updateMessage = (newMessage) => {
    state.messagePage.newMessageText = newMessage
    renderTree(state)
}

export const subscribe = (observer) => {
    renderTree = observer
}

export default state