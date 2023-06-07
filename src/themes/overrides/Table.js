// ==============================|| OVERRIDES - TABLE CELL ||============================== //

export default function MuiTable(theme) {
  return {
    MuiTable: {
      styleOverrides: {
        root:{
// background:"red"
        }, 
        MuiTableCell: {
          styleOverrides: {
              root: {
                  padding: '4px 16px',
                  background:"red"

              },
              head: {
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  background:"red"
                },
          },

      },
      },
    },
  };
}
