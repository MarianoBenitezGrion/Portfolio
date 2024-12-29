import { IoMdDownload } from "react-icons/io";
import { MdFileDownloadDone } from "react-icons/md";
const CVIcon=({download})=>{
    return (
        <>
            {!download ? (
                <>
                    <IoMdDownload id="icon-download" size={"20%"} /> Descarga CV
                </>
            ) : (
                <MdFileDownloadDone size={"20%"} color="green" />
            )}
        </>
    );
    

}
export default CVIcon;