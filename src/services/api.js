import axios from "axios";
const URL= 'https://hospital-pulse-connect.onrender.com/api/v1/user';
export const authenticateSignup = async(data,token) => {
    try {
        const config = {headers: {Authorization: `Bearer ${token}`}};
        return await axios.post(`${URL}/signup`,data,config)
    } catch (error) {
        console.log("Error while calling Signup api",error);
    }
}
export const authenticateLogin = async (data, token) => {
    try {
        const config = {headers: {Authorization: `Bearer ${token}`}};
        return await axios.post(`${URL}/login`, data, config);
    } catch (error) {
        console.log("Error while calling login api", error.message);
        return error.response;
    }
};
export const addChild = async(data) =>{
    const token = localStorage.getItem('token'); 
    
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return await axios.post(`https://hospital-pulse-connect.onrender.com/api/v1/child/addChild`,data,config)
    } catch (error) {
        console.log("error creating child")
        return error.response;
    }
}
export const getChild = async () => {
    const token = localStorage.getItem('token');
    
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return await axios.get(`https://hospital-pulse-connect.onrender.com/api/v1/child/rootChild`, config);
    } catch (error) {
        console.log("error fetching child data");
        return error.response;
    }
}


const URI = 'https://hospital-pulse-connect.onrender.com/api/v1/image';

export const uploadFile = async (file) => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.error('No token found');
        return { status: 401, message: 'Not authorized' };
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        };

        const response = await axios.post(`${URI}/upload`, formData, config);
        return response;
    } catch (error) {
        console.error('Error while uploading file:', error);
        return { status: error.response.status, message: error.message };
    }
};

export const getPatients = async(data) => {
    try {
        const response= await axios.get('https://hospital-pulse-connect.onrender.com/api/v1/user',data);
        return response.data;
    } catch (error) {
        console.log("Error while calling getPatients api",error);
    }
}

export const getChildByParentId = async (parentId) => {
    try {
        const response = await axios.get(`https://hospital-pulse-connect.onrender.com/api/v1/child/parent/${parentId}`);
        return response.data;
    } catch (error) {
        console.error('Error while fetching child data:', error);
        return error.response;
    }
}

export const getDocuments = async (data) => {
    try {
        const response = await axios.get(`https://hospital-pulse-connect.onrender.com/api/v1/document`,data);
        return response.data;
    } catch (error) {
        console.error('Error while fetching document data:', error);
        return error.response;
    }
}

export const addDocument = async (file) => {
    const token = `localStorage.getItem('token')`;
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const formData = new FormData();
        formData.append('document', file);
        return await axios.post(`https://hospital-pulse-connect.onrender.com/api/v1/document`,formData, config);
    } catch (error) {
        console.log("error creating document")
        return error.response;
    }
}

export const getReports = async (data) => {
    const token = localStorage.getItem('token')
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return await axios.get(`https://hospital-pulse-connect.onrender.com/api/v1/report`,data,config);
        
    }
    catch (error) {
        console.error('Error while fetching report data:', error);
        return error.response;
    }
}

export const getAllDoctors = async () => {
    const token = localStorage.getItem('token');
    
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return await axios.get(`https://hospital-pulse-connect.onrender.com/api/v1/doctor`, config);
    } catch (error) {
        console.log("error fetching data!");
        return error.response;
    }
}

export const createAppointment = async(data) =>{
    const token = localStorage.getItem('token'); 
    
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return await axios.post(`https://hospital-pulse-connect.onrender.com/api/v1/appointment`,data,config)
    } catch (error) {
        console.log("error creating child")
        return error.response;
    }
}
export const getAppointments = async () => {
    const token = localStorage.getItem('token');
    
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return await axios.get(`https://hospital-pulse-connect.onrender.com/api/v1/appointment`, config);
    } catch (error) {
        console.log("error fetching data!");
        return error.response;
    }
}