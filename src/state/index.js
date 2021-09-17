let store = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscribe() {},
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            image: "https://im0-tub-ru.yandex.net/i?id=a010265297fb86a07acde926f77ebc4c&n=13&exp=1",
            like: 0, 
            alt: "icon"
        }
        this._state.profilePage.dataPost.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscribe(this._state)
    },
    updatePost(newPost) {
        this._state.profilePage.newPostText = newPost
        this._callSubscribe(this._state)
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagePage.newMessageText
        }
        this._state.messagePage.dataMessage.push(newMessage)
        this._state.messagePage.newMessageText = ''
        this._callSubscribe(this._state)
    },
    updateMessage(newMessage) {
        this._state.messagePage.newMessageText = newMessage
        this._callSubscribe(this._state)
    },
    subscribe(observer) {
        this._callSubscribe = observer
    }
}

export default store