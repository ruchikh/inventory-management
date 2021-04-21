import React from "react";
import { withStyles, TextField, Button, Input } from "@material-ui/core";

import Styles from "../style/Styles.js";

const CreateData = props => {
  const {
    Id,
    Title,
    Quantity,
    Description,
    handleChange,
    addData,
    saveUpdate,
    classes,
    isEditing
  } = props;

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={addData}>
        <TextField
          id="title-id"
          name="Title"
          label="Title"
          onChange={handleChange}
          value={Title}
          fullWidth
          required
        />
        <TextField
          id="description-id"
          name="Description"
          label="Description"
          onChange={handleChange}
          value={Description}
          fullWidth
          required
        />
        <span>Quantity</span>
        <Input
          id="quntity-id"
          name="Quantity"
          label="Quantity"
          type="number"
          onChange={handleChange}
          value={Quantity}
          fullWidth
          required
        />
        {isEditing ? (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            onClick={e => saveUpdate(e, Id)}
            fullWidth
          >
            Update
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            fullWidth
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};


export default withStyles(Styles)(CreateData);
