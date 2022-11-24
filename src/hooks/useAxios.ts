import useAsync from "./useAsync";
import axios from "axios";

export const useGetAxios = <TData>(path: string) => {
    const {callRequest, ...rest} = useAsync<TData>()

    const getFn = () => callRequest(axios.get(path))

    return {getFn, ...rest}
}
export const usePostAxios = <TData>(path: string) => {
    const {callRequest, ...rest} = useAsync()
    const postFn = (postingData: TData) => callRequest(axios.post(path, postingData))

    return {postFn, ...rest}
}
export const usePostFormAxios = <TData>(path: string) => {
    const {callRequest, ...rest} = useAsync()
    const postFormFn = (postingData: TData) => callRequest(axios.postForm(path, postingData))

    return {postFormFn, ...rest}
}
export const useDeleteAxios = (path: string) => {
    const {callRequest, ...rest} = useAsync()
    const deleteFn = (query: string) => callRequest(axios.delete(`${path}${query}`,))

    return {deleteFn, ...rest}
}
export const usePatchAxios = <TData>(path: string) => {
    const {callRequest, ...rest} = useAsync()
    const patchFn = (query: string, patchingData: TData) =>
        callRequest(axios.patch(`${path}${query}`, patchingData))

    return {patchFn, ...rest}
}