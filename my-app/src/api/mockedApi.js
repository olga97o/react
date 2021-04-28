import {mockedResponse} from "./mockedResponse";

export const mockedApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
                resolve(mockedResponse)
            , 500)
    })
}