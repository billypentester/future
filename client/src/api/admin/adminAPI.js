import axios from './../../config'

const getUsers = async() => {
    try {
        const response = await axios.get('admin/user')
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

export {
    getUsers
}