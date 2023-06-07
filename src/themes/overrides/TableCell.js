// ==============================|| OVERRIDES - TABLE CELL ||============================== //i
export default function TableCell(theme) {
  return {
    MUIDataTableToolbar: {
      styleOverrides: {
        root: {
          borderBottom: " 1px solid",
          borderColor: "rgba(254, 79, 21, 0.2)",
          letterSpacing: "0.0075em",
          fontWeight: "500",
          lineHeight: "1.5em",
          color: "#121926",
          fontFamily: "Roboto,Helvetica,Arial,sansSerif",
          fontSize: "1.3rem",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid",
          borderRight: "1px solid",
          borderColor: "goldenrod",
          background: "lemonchiffon",
          color: "black",
          fontSize: "15px",
          fontWeight: "600",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          paddingY: "5px",
          textAlign: "center",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          letterSpacing: "0em",
          fontWeight: "400",
          lineHeight: "1.5em",
          color: "#364152",
          fontFamily: "Roboto,Helvetica,Arial,sansSerif",
          fontSize: "0.875rem",
          display: "tableCell",
          verticalAlign: "inherit",
          borderBottom: "1px solid goldenrod",
          textAlign: "left",
          padding: "6px 16px",
        },
        icon: {
          color: "blue",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fe4f15",
        },
      },
    },
  };
}
