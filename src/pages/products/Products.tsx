import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import "./products.scss"
import DataTable from "../../components/DataTable/DataTable";
import Modal from "../../components/Modal/Modal";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: "img",
      headerName: "Image",
      width:100,
      renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"}/>
      }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    type: "string",
  },
  {
    field: 'color',
    type: "string",
    headerName: 'Color',
    width: 250,
  },
  {
    field: 'price',
    type: "string",
    headerName: "Price",
    width:200,
  },
  {
    field: 'producer',
    type: "string",
    headerName: "Producer",
    width:200,
  },
  {
    field: 'createdAt',
    type: "string",
    headerName: "Created At",
    width:200,
  },
  {
      field: "inStock",
      headerName:"In Stock",
      width: 200,
      type: "boolean"
  },
  
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products}/>
      {open && <Modal columns={columns} slug="Product" setOpen={setOpen}/>}
    </div>
  )
}

export default Products