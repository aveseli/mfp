import { LinearProgress } from "@material-ui/core/LinearProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <LinearProgress /> */}
    </div>
  );
};
