import React, { Component } from 'react';
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     render() {
      //  console.log("====TableRow====",this.props.obj.id)
            return (
                <tr>
                  <td style={{padding:10}}>{this.props.obj.id}</td>
                  <td>{this.props.obj.name}</td>
                </tr>
         );
    }
}
 
export default TableRow;