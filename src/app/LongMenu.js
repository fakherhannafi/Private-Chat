import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const options = ["Modifier Profil", "Sécurité", "Déconnexion"];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    anchorEl: null
  };
  componentWillMount = () => {
    console.log(this.props);
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    window.location = "/profile";
    this.setState({ anchorEl: null });
  };
  logout = e => {
    var retrievedObject = sessionStorage.clear();
    if (retrievedObject == null) {
      window.alert("Se déconnecter...");
      window.location = "/login";
    }
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="More"
          aria-owns={open ? "long-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 } }}
        >
          <MenuItem key={options[0]} onClick={this.handleClose}>
            {options[0]}
          </MenuItem>
          <MenuItem key={options[1]} onClick={this.handleClose}>
            {options[1]}
          </MenuItem>
          <MenuItem key={options[2]} onClick={e => this.logout(e)}>
            {options[2]}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default LongMenu;
