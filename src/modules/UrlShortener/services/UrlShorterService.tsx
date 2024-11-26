import axios from '../utils/axios';

interface DataRequestDto {
    original: string
}

export const getListShoterUrls = async () => {
    let output = [];
    try {
        const response = await axios.get('urlshortener');
        output = response.data.data;
    } catch (error) {
        console.log('ErrorGetListShoterUrls', error)
    }

    return output;
}

export const saveUrl = async (data:DataRequestDto) => {
    let output = [];
    try {
        const response = await axios.post('urlshortener',data);
        output = response.data;
    } catch (error) {
        output = error.response.data;
        console.log('ErrorSaveUrl', error)
    }

    return output;
}

export const deleteUrl = async (id:number) => {
    let output = [];
    try {
        const response = await axios.delete(`urlshortener/${id}`);
        output = response.data.data;
    } catch (error) {
        console.log('ErrorSaveUrl', error)
    }

    return output;
}

export const getUrl = async (id:number) => {
    let output = [];
    try {
        const response = await axios.get(`urlshortener/${id}`);
        output = response.data.data;
    } catch (error) {
        console.log('ErrorGetUrl', error)
    }

    return output;
}

export const getUrlByCode = async (code:any) => {
    let output = [];
    try {
        const response = await axios.get(`urlshortener/url/${code}`);
        output = response.data.data;
    } catch (error) {
        console.log('ErrorGetUrlCode', error)
    }

    return output;
}