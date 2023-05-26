"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARFTableTest = void 0;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    var top = 10;
    var left = 25;
    return {
        top: "".concat(top, "%"),
        margin: "auto",
    };
}
var useRowStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        root: {
            backgroundColor: "lime",
            "& > *": {
                borderBottom: "unset",
            },
            "& .MuiTableRow-root": {
                backgroundColor: "red",
                marginLeft: 150,
            },
        },
        formControl: {
            width: "70%",
            display: "block",
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        paper: {
            position: "absolute",
            width: "750px",
            fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            overflow: "auto",
        },
        deploymentPatternsSelect: {
            margin: "30px",
        },
        mainTableCell: { paddingLeft: 10, width: "80%" },
        dropdownIconButton: { marginRight: 10 },
    });
});
var CARFTableTest = function () {
    return <div>hello</div>;
};
exports.CARFTableTest = CARFTableTest;
