import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import DataTable from "../../components/DataTable/DataTable";
import Modal from "../../components/Modal/Modal";
import "./orders.scss";
import { ordersData } from "../../data";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'orderNumber',
      headerName: 'Order No.',
      width: 250,
      type: "string",
    },
    {
      field: 'customerName',
      type: "string",
      headerName: 'Customer Name',
      width: 250,
    },
    {
      field: 'status',
      type: "string",
      headerName: "Delivered",
      width:200,
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
      headerName: "Phone",
      width:200,
    },
    {
      field: 'createdAt',
      type: "string",
      headerName: "Created At",
      width:200,
    },
    
  ];

const Orders = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="products">
        <div className="info">
          <h1>Orders</h1>
          <button onClick={()=>setOpen(true)}>Add New Order</button>
        </div>
        <DataTable slug="products" columns={columns} rows={ordersData}/>
        {open && <Modal columns={columns} slug="Order" setOpen={setOpen}/>}
      </div>
    )
}

export default Orders