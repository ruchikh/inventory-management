import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CreateData from "./CreateData.js";
import DataLists from "./DataLists.js";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLists: [
        {
          Id: Math.random(),
          Title: "Water Bottles",
          Quantity: "20",
          Description:
            "Minaral, Normal, filter"
        },
        {
          Id: Math.random(),
          Title: "Juice Bottles",
          Quantity: "50",
          Description: "Apple, orange, grapes, Pineaple"
        },
        {
          Id: Math.random(),
          Title: "Oil container",
          Quantity: "50",
          Description: "eatable, petrol"
        }
      ],
      Id: null,
      Title: "",
      Quantity: "",
      Description: "",
      isEditing: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //To add data to the dataList array
  addData = e => {
    e.preventDefault();
    const { Title, Quantity, Description } = this.state;
    if (!Title || !Quantity || !Description) return;
    let dataLists = [
      ...this.state.dataLists,
      {
        Id: Math.random(),
        Title: Title,
        Quantity: Quantity,
        Description: Description
      }
    ];
    this.setState({
      dataLists
    });
    this.reset();
  };

  //To reset the form fields
  reset = () => {
    this.setState({
      Title: "",
      Quantity: "",
      Description: ""
    });
  };

  //To remove the data from the list
  removeData = Id => {
    let dataLists = this.state.dataLists.filter(data => {
      return data.Id !== Id;
    });

    this.setState({
      dataLists
    });
  };

  //To handle the data Update
  handleUpdate = (e, Id) => {
    const index = this.state.dataLists.findIndex(data => {
      return data.Id === Id;
    });
    const data = Object.assign({}, this.state.dataLists[index]);
    this.setState({
      Id: data.Id,
      Title: data.Title,
      Quantity: data.Quantity,
      Description: data.Description,
      isEditing: true
    });
  };

  //To save the updated data
  saveUpdate = (e, Id) => {
    const newData = this.state.dataLists.map(data => {
      if (data.Id === Id) {
        return {
          Title: this.state.Title,
          Quantity: this.state.Quantity,
          Description: this.state.Description
        };
      }
      return data;
    });
    this.setState(
      {
        dataLists: newData,
        isEditing: false
      },
      () => {
        this.reset();
      }
    );
  };

  render() {
    const {state, addData, handleChange, saveUpdate, removeData, handleUpdate} = this,
    {
      dataLists,
      Id,
      Title,
      Quantity,
      Description,
      isEditing
    } = state;

    return (
      <Grid container spacing={0}>
        <Grid item ls={6} md={6} sm={12} xs={12}>
          <CreateData
            Id={Id}
            Title={Title}
            Description={Description}
            Quantity={Quantity}
            addData={addData}
            handleChange={handleChange}
            saveUpdate={saveUpdate}
            isEditing={isEditing}
          />
        </Grid>
        <Grid item ls={6} md={6} sm={12} xs={12}>
          <DataLists
            lists={dataLists}
            removeData={removeData}
            handleUpdate={handleUpdate}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Inventory;
