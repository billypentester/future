import axios from './../../config'

const adminLogin = async(data) => {
    try{
        const response = await axios.post('admin/login', data)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}

const getUsers = async() => {
    try {
        const response = await axios.get('admin/user')
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const getContent = async() => {
    try {
        const response = await axios.get('admin/content')
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const addPaymentMode = async(data) => {
    try {
        const response = await axios.post('admin/payment', data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const deletePaymentMode = async(id) => {
    try {
        const response = await axios.delete('admin/payment', { data: { id } })
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const updatePaymentMode = async(data) => {
    try {
        const response = await axios.put(`admin/payment`, data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const addCourse = async(data) => {
    try {
        const response = await axios.post('admin/course', data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const deleteCourse = async(id) => {
    try {
        const response = await axios.delete('admin/course', { data: { id } })
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const updateCourse = async(data) => {
    try {
        const response = await axios.put(`admin/course`, data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const addTiming = async(data) => {
    try {
        const response = await axios.post('admin/timing', data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const deleteTiming = async(id) => {
    try {
        const response = await axios.delete('admin/timing', { data: { id } })
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const updateTiming = async(data) => {
    try {
        const response = await axios.put(`admin/timing`, data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}


export {
    getUsers, adminLogin,
    getContent, 
    addPaymentMode, deletePaymentMode, updatePaymentMode,
    addCourse, deleteCourse, updateCourse,
    addTiming, deleteTiming, updateTiming
}