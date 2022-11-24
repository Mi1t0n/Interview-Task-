import {Dispatch, SetStateAction, useState} from "react";

const useError = (): [string, Dispatch<SetStateAction<string>>] => {
    const [error, setError] = useState<string>('');

    return [error, setError]
}

export default useError