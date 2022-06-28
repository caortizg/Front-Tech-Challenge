import { ENTRYPOINT, API_AUTHORIZATION } from "../config/entrypoint";
import { toQueryString } from "./objects";

export function fetch(id, options = {}) {
    if ("undefined" === typeof options.headers) options.headers = new Headers();
    if (null === options.headers.get("Authorization"))
        options.headers.set("Authorization", API_AUTHORIZATION);


    return global.fetch(new URL(id, ENTRYPOINT), options).then((response) => {
        return response
    });
}

export function fetchService(serviceId, parameters = {}, options = {}) {
    const newServiceId = serviceId + '?' + toQueryString(parameters);
    return fetch(newServiceId, options)
        .then((response) =>
            response
                .json()
        )
}


export function list(serviceId, parameters = {}, options = {}) {
    return fetchService(serviceId, parameters, options);
}