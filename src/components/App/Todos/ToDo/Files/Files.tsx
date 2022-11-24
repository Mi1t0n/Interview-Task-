import {TFiles} from "./IFiles";
import File from "./File/File";
import FileInput from "./FileInput/FileInput";
import {TodoStatus, TrefetchProp} from "../../../IApp";

const Files = ({pinnedFiles, refetch, id, status}: TFiles & TrefetchProp) =>
    <div style={{
        padding     : '10px', gridRow: '2/3', gridColumn: '2/3',
        display     : "grid", gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: '1fr 1fr',
        justifyItems: 'center', alignItems: 'center'
    }}>
        {pinnedFiles.map(
            file => <File file={file} id={id} status={status} refetch={refetch} key={file.id}/>
        )}
        {status === TodoStatus.inprogress && pinnedFiles.length < 8
            && <FileInput id={id} refetch={refetch}/>
        }
    </div>

export default Files;
