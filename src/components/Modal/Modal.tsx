import { GridColDef } from "@mui/x-data-grid"
import "./modal.scss"

type ModalProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    columns: GridColDef[],
    slug: string,
}

const Modal = (props: ModalProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        //post api to add new item
        //
    }

    return (
        <div className="modal">
            <div className="container">
                <span className="close" onClick={()=>props.setOpen(false)}>X</span>
                <h1 className="title">Add New {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns.filter(item=>item.field!=="id" && item.field!=="img")
                    .map(column => (
                        <div className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field}/>
                        </div>
                    ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Modal