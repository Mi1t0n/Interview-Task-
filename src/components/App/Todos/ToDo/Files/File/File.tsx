import FilePresentIcon from "@mui/icons-material/FilePresent";
import LoadingButton from "@mui/lab/LoadingButton";
import {TodoStatus, TrefetchProp} from "../../../../IApp";
import {IFile} from "./IFile";
import {useDeleteAxios} from "../../../../../../hooks/useAxios";

const File = ({refetch, id, file,status}: IFile & TrefetchProp) => {
    const {deleteFn: deleteFile, loading} = useDeleteAxios('/todosfiles')

    const deleteHandler = () => {
        if(status !== TodoStatus.inprogress) return
        deleteFile(`/${id}&${file.id}`)
            .then(() => refetch())
    }

    return (
        <LoadingButton style={{width: '25px', height: '25px'}} loading={loading}
                       color={"inherit"} title={file.filename} onDoubleClick={deleteHandler}
        >
            <FilePresentIcon/>
        </LoadingButton>
    );
}

export default File;
