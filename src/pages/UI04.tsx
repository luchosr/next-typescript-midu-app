import * as React from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  preReqColumns,
  preReqRows,
  columnGroupingModel,
} from "@/components/UI04/UI04Data";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
type Props = {
  rows: any;
  columns: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 500,
      width: "100%",
      margin: "57px",
      "& .appSummary-header": {
        backgroundColor: "#8497B0",
        color: "white",
        wordWrap: "break-word",
      },
      "& .readyToBuild-header": {
        backgroundColor: "#3459C4",
        color: "white",
        wordWrap: "break-word",
      },
      "& .readyToRelease-header": {
        backgroundColor: "#34A1C4",
        color: "white",
        wordWrap: "break-word",
      },
      "& .rTBTollgateStatus-cell ": {
        backgroundColor: "#D6DCE4",
        color: "#44546A",
        wordWrap: "break-word",
      },
      "& .rTRTollgateStatus-cell": {
        backgroundColor: "#D6DCE4",
        color: "#44546A",
        wordWrap: "break-word",
      },
    },
    paper: {
      position: "absolute",
      width: "50%",
      height: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function StylingHeaderGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={preReqRows}
        columns={preReqColumns}
        experimentalFeatures={{ columnGrouping: true }}
        // @ts-ignore
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: CustomToolbar,
        }}
        disableSelectionOnClick
        density={"compact"}
        columnGroupingModel={columnGroupingModel}
      />
    </div>
  );
}
