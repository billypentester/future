import axios from './../../config'

const getPaymentModes = async() => {
    try {
        const response = await axios.get('web/payment')
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const createUser = async(user) => {
    try {
        let data = new FormData();
        data.append('name', user.name)
        data.append('phoneNo', user.phoneNo)
        data.append('email', user.email)
        data.append('city', user.city)
        data.append('course', user.course)
        data.append('timing', user.timing)
        data.append('paymentMode', user.paymentMode)
        data.append('ssFile', user.screenShot)
        const response = await axios.post('web/user', data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

export {
    getPaymentModes,
    createUser
}
