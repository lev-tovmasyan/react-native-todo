import Axios from "axios";


export const instance = Axios.create({
    baseURL: 'https://react-native-todo-5faa2-default-rtdb.firebaseio.com/',
})
