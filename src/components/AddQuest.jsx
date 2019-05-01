import React from "react"
import {withStyles} from "@material-ui/core/styles"
import Checkout from "./addQuest/Checkout"

const Styles = {
  questForm: {
    width: '100%',
    overflowX: 'auto',
  }
}

const AddQuest = classes => {
  return (
    <React.Fragment>
      <Checkout />
    </React.Fragment>
  )
}

export default withStyles(Styles)(AddQuest);