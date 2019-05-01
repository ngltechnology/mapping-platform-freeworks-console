import React from "react"
import {withStyles} from "@material-ui/core/styles"
import { Paper, TextField } from "@material-ui/core";

const Styles = {
  questForm: {
    width: '100%',
    overflowX: 'auto',
  }
}

const AddQuest = classes => {
  return (
    <React.Fragment>
      <Paper className={classes.questForm}>
        
      </Paper>
    </React.Fragment>
  )
}

export default withStyles(Styles)(AddQuest);