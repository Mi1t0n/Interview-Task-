import {Dispatch, SetStateAction, useState} from "react";

const useData = <Tdata>(): [Tdata | undefined, Dispatch<SetStateAction<Tdata | undefined>>] => {
    const [data, setData] = useState<Tdata | undefined>();

    return [data, setData]
}
export default useData