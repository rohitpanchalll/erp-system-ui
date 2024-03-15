import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

import "./users.scss"
import DataTable from "../../components/DataTable/DataTable"
import { usersData } from "../../data";
import Modal from "../../components/Modal/Modal";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: "Avatar",
      headerName: "Avatar",
      width:100,
      renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"}/>
      }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    type: "string",
    headerName: "Email",
    width:200,
  },
  {
    field: 'phone',
    type: "string",
    headerName: "Contact",
    width:200,
  },
  {
    field: 'createdAt',
    type: "string",
    headerName: "Created At",
    width:200,
  },
  {
      field: "status",
      headerName:"Verified",
      width: 200,
      type: "boolean"
  },
  
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={usersData}/>
      {open && <Modal columns={columns} slug="User" setOpen={setOpen}/>}
    </div>
  )
}

export default Users