import useLoading from "./useLoading";
import useError from "./useError";
import useData from "./useData";
import {AxiosError, AxiosResponse} from "axios";

const useAsync = <TData>() => {
    const [loading, setLoading] = useLoading()
    const [error, setError] = useError()
    const [data, setData] = useData<AxiosResponse<TData>>()

    const callRequest = async (promise: Promise<AxiosResponse<TData>>) => {
        try {
            setLoading(true)
            setData({} as AxiosResponse)
            setError('')

            const response = await promise
            setData(response)

            setLoading(false)
        } catch (_error) {
            const error = _error as AxiosError
            setError(error.message)
            setLoading(false)
        }
    }


    return {callRequest, data, loading, error}
}

export default useAsync