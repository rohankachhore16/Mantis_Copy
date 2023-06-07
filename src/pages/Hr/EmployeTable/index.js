import React, { useState } from "react";
import MuiTableAtoms from "Component/atoms/MuiTable";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import {
  EditOutlined,
  RemoveRedEyeOutlined,
} from "../../../../node_modules/@mui/icons-material/index";

const handleCoulms = (handleDelete,handleEdit) => {
  return [
    {
      name: "name",
      label: "Employees",
      options: {
        filter: true,
        sort: true,
        button: false,
      },
    },
    {
      name: "fname",
      label: "First Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "lname",
      label: "Last Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "joining",
      label: "Joining Data",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "relliving",
      label: "Relliving Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "active",
      label: "Active",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "login",
      label: "Login",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "created",
      label: "Created",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "id",
      label: "Option",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log("value", value);
          return (
            <>
              <IconButton aria-label="delete" size="small">
                <Delete
                  fontSize="inherit"
                  onClick={() => handleDelete(value)}
                />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <RemoveRedEyeOutlined fontSize="inherit" />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <EditOutlined fontSize="inherit" onClick={()=>handleEdit() } />
              </IconButton>
              
               
            </>
          );
        },
      },
    },
  ];
};

const options = {
  filterType: "checkbox",
  selectableRows: false,
  viewColumns: false,
  download: false,
  print: false,
  filter: false,
  columnfilter: false,
  sort: false,
  // onColumnSortChange: (changedColumn, direction) =>
  //   console.log("changedColumn: ", changedColumn, "direction: ", direction),
  // onChangeRowsPerPage: (numberOfRows) =>
  //   console.log("numberOfRows: ", numberOfRows),
  // onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
};
const EmployeTable = () => {
  const [isEdit, setEdit] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      name: "Joe James",
      fname: "Test Corp",
      lname: "Yonkers",
      joining: "NY",
      relliving: "re",
      active: "true",
      login: "genrate",
      created: "10jan",
      option: "",
    },
    {
      id: 2,
      name: "Joe James",
      fname: "Test Corp",
      lname: "Yonkers",
      joining: "NY",
      relliving: "re",
      active: "true",
      login: "genrate",
      created: "10jan",
      option: "",
    },
    {
      id: 3,
      name: "Joe James",
      fname: "Test Corp",
      lname: "Yonkers",
      joining: "NY",
      relliving: "re",
      active: "true",
      login: "genrate",
      created: "10jan",
      option: "",
    },
  ]);


  const handleDelete = (value) => {
    setData(data?.filter((item) => item?.id !== value));
  };
const handleEdit =()=>{
  // setEdit(!isEdit);
alert("hello world")
}


  const columns = handleCoulms(handleDelete,handleEdit);

  return (
    <>
      <MuiTableAtoms
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default EmployeTable;
