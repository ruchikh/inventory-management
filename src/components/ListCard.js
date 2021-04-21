import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";

import Styles from "../style/Styles";

const ListCard = props => {
  const {
    classes,
    Id,
    Title,
    Quantity,
    Description,
    handleUpdate,
    removeData
  } = props;
  return (
    <Card className={classes.card} elevation={1}>
      <CardContent>
        <IconButton
          aria-label="Update"
          className={classes.edit}
          onClick={e => handleUpdate(e, Id)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          aria-label="Delete"
          className={classes.delete}
          onClick={() => removeData(Id)}
        >
          <DeleteOutlined />
        </IconButton>
        <Typography variant="h4" className={classes.name}>
          {Title}
        </Typography>
        <Typography variant="body1" className={classes.details}>
          {Description}
        </Typography>
        <Typography variant="h6" className={classes.body}>
          Quantity: {Quantity}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default withStyles(Styles)(ListCard);
