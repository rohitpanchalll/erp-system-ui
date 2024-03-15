import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import "./dataTable.scss"
import { Link } from "react-router-dom"

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string
}
const DataTable = (props: Props) => {

    const handleDelete = (id: number) => {
        // api to delete
        console.log(id +"Id is deleted")
    }

    const actionColumn:GridColDef = {
        field: "action",
        headerName: "Modify",
        width: 200,
        renderCell: (params)=>{
            return(
                <div className="actions">
                    <Link to={`/${props.slug}/${params.row.id}`}><img src="/view.svg" alt="view"/></Link>
                    <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="delete"/>
                    </div>
                </div>
            )
        }
    }

  return (
    <div className="dataTable">
        <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps: {debounceMs: 500}
                
            }
        }}
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector 
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default DataTable