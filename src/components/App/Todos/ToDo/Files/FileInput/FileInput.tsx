import AddIcon from '@mui/icons-material/Add';
import LoadingButton from "@mui/lab/LoadingButton";
import {ChangeEvent, CSSProperties, useRef} from "react";
import {TFileInput} from "./IFileInput";
import {TrefetchProp} from "../../../../IApp";
import {usePostFormAxios} from "../../../../../../hooks/useAxios";

const hidden: CSSProperties = {
    opacity   : 0,
    height    : 0,
    width     : 0,
    lineHeight: 0,
    overflow  : 'hidden',
    padding   : 0,
    margin    : 0
}
const FileInput = ({id, refetch}: TFileInput & TrefetchProp) => {
    const input = useRef<HTMLInputElement | null>(null)
    const {postFormFn: postFile, loading: lFile} = usePostFormAxios<FormData>(`/todosfiles/${id}`)

    const addFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return

        const formData = new FormData()
        const file = event.target.files[0]
        formData.append('file', file)

        postFile(formData)
            .then(() => refetch())
    }

    const openInputClick = () => input.current?.click()

    return (
        <LoadingButton style={{width: '25px', height: '25px'}}
                       color={"inherit"} onClick={openInputClick} loading={lFile}
        >
            <input type="file" accept={'image/*,.jpg,.png'} style={hidden}
                   onChange={addFileHandler} ref={input}
            />
            <AddIcon/>
        </LoadingButton>
    );
}

export default FileInput;
