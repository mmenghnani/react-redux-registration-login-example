import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

class ContractorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const obj = [
      {
        id: 123,
        name: "test",
        status: "accepted",
        bid: "open"
      },
      {
        id: 456,
        name: "test2",
        status: "accepted",
        bid: "open"
      }
    ];
    const thStyling = {
        paddingTop : "12px",
        paddingBottom : "12px",
        backgroundColor: "#4CAF50",
        textAlign : "center"
    }
    const tdStyling = {
        paddingTop : "6px",
        paddingBottom : "6px",
        textAlign : "center"
    }

    return (
      <React.Fragment>
        <div className="col-md-6">
          <h2>Welcome Saumya</h2>
        </div>
        <div style={{padding: "20px"}} className="col-md-6 col-md-offset-3">
          <label>Search Projects</label>
          <input placeholder="Project name" />
        </div>
        <table style={({ width: "100%", padding: "8px", textAlign: "center" })}>
          <tr>
            <th style={thStyling}>Name</th>
            <th style={thStyling}>Status</th>
            <th style={thStyling}>Bid</th>
          </tr>
          {obj.map(item => {
            return (
              <tr>
                <td style={tdStyling}>{item.name}</td>
                <td style={tdStyling}>{item.status}</td>
                <td style={tdStyling}>{item.bid}</td>
              </tr>
            );
          })}
        </table>
      </React.Fragment>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
};

const connectedContractorPage = connect(
  mapState,
  actionCreators
)(ContractorPage);
export { connectedContractorPage as ContractorPage };
