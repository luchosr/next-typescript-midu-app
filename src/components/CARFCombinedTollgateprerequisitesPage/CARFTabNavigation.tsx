import React from "react";
import { makeStyles } from "@material-ui/core/styles";
type Props = {
  tabIcon: React.ReactNode;
  tabText: string;
  isDisabled: boolean;
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    opacity: 1,
    fontWeight: "bold",
    color: "#000000DE",
    "&:disabled": {
      opacity: 1,
      fontWeight: "bold",
      color: "rgba(0, 0, 0, 0.4)",
    },
  },
  tabText: { paddingLeft: "5px" },
}));

export const CARFTabNavigation = ({ tabIcon, tabText, isDisabled }: Props) => {
  const classes = useStyles();

  return (
    <button className={classes.homeButton} disabled={isDisabled}>
      {tabIcon}
      <span className={classes.tabText}>{tabText}</span>
    </button>
  );
};
