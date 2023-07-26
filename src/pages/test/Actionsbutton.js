import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import classes from "./test.module.scss";

const Actionsbutton = ({ actions = [] }) => {
  // const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <SpeedDial
        onClick={handleClick}
        ariaLabel={`SpeedDial`}
        className={classes.speedDial}
        icon={<SpeedDialIcon className={classes.viewIcon} />}
        open={open}
        direction={"left"}
        classes={{ fab: classes.fab }}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="top"
            onClick={(e) => {
              e.preventDefault();
              action.onClick();
            }}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Actionsbutton;
