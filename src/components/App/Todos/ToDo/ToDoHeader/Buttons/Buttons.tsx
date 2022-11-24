import LoadingButton from "@mui/lab/LoadingButton";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutline from "@mui/icons-material/Delete";
import {TButtons} from "./IButtons";
import {useDeleteAxios, usePatchAxios} from "../../../../../../hooks/useAxios";
import {IToDo} from "../../IToDo";
import {TodoStatus, TrefetchProp} from "../../../../IApp";

const Buttons = ({id, status, refetch}: TButtons & TrefetchProp) => {
    const {patchFn: changeStatus, loading: lPatch} = usePatchAxios<Partial<IToDo>>('/todos')
    const {deleteFn: deleteToDo, loading: lDelete} = useDeleteAxios('/todos')

    const doneHandler = () => {
        changeStatus(`/${id}`, {status: TodoStatus.done})
            .then(() => refetch())
    }

    const deleteHandler = () => {
        deleteToDo(`/${id}`)
            .then(() => refetch())
    }

    return (
        <div style={{display: "flex", gap: '10px'}}>
            {status === TodoStatus.inprogress &&
                <LoadingButton
                    disabled={lDelete} loading={lPatch}
                    color={"success"} size={"small"} variant="outlined"
                    startIcon={<DoneIcon fontSize="inherit"/>}
                    onClick={doneHandler}
                >Done</LoadingButton>}
            <LoadingButton
                disabled={lPatch} loading={lDelete}
                color={"error"} size={"small"} variant="outlined"
                startIcon={<DeleteOutline fontSize="inherit"/>}
                onClick={deleteHandler}
            >Delete</LoadingButton>
        </div>
    );
}

export default Buttons;
