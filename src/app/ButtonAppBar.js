import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LongMenu from "./LongMenu";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
  }
  logout = e => {
    var retrievedObject = sessionStorage.clear();
    if (retrievedObject == null) {
      window.alert("Se déconnecter...");
      window.location = "/login";
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <LongMenu />
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {this.props.username}
            </Typography>
            <Button color="inherit" onClick={e => this.logout(e)}>
              Déconnexion
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
