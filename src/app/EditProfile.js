import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

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
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      id: ""
    };
    this.props.user = sessionStorage.getItem("userInfo");
    this.state.name = this.props.user.username;
  }
  componentWillMount = () => {
    //console.log(this.props.user);

    axios
      .get("/user/myicon", {
        params: {
          username: this.props.user.username
        }
      })
      .then(res => {
        this.props.user.icon = res["data"]["icon"];
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChange(field, e) {
    let change = {};
    change[field] = e.target.value;

    this.setState({ user: Object.assign({}, this.state.user, change) });
  }

  onSubmit() {
    this.props.update(this.state.user);
  }
  updateProfile() {
    axios
      .post("/user/profile", {
        username: this.props.user.username,
        icon: this.props.user.icon,
        updateTime: Date()
      })
      .then(function(res) {
        if (res.data._message == null) {
          // no error
        } else {
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <form onSubmit={this.onSubmit.bind(this)}>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    onChange={this.handleChange.bind(this, "image")}
                  />
                  //defaultValue={this.props.user.username}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    onChange={this.handleChange.bind(this, "username")}
                  />
                  //defaultValue={this.props.user.password}
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    onChange={this.handleChange.bind(this, "bio")}
                  />
                  //defaultValue={this.props.user.username}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    onChange={this.handleChange.bind(this, "email")}
                  />
                  //defaultValue={this.props.user.username}
                </fieldset>
                <Button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  onClick={this.updateProfile}
                >
                  Update Profile
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EditProfile);
