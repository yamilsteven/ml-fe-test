import axios from 'axios';

export const AxiosRequest = (endPoint, type, data = null) => {

    const url = 'https://api.mercadolibre.com/' + endPoint;
    var config = {}

    switch (type) {
        case 'get':
            return axios.get(url, config).then(function (response) {
                return ({ code: 1, data: response.data });
            }).catch(function (error) {
                return ({ code: 0, data: error.response.data });
            })
        case 'post':
            return axios.post(url, data, config).then(function (response) {
                return ({ code: 1, data: response.data });
            }).catch(function (error) {
                return ({ code: 0, data: error.response.data });
            })
        case 'put':
            return axios.put(url, data, config).then(function (response) {
                return ({ code: 1, data: response.data });
            }).catch(function (error) {
                return ({ code: 0, data: error.response.data });
            })
        case 'delete':
            return axios.delete(url, config).then(function (response) {
                return ({ code: 1, data: response.data });
            }).catch(function (error) {
                return ({ code: 0, data: error.response.data });
            })
    }
}