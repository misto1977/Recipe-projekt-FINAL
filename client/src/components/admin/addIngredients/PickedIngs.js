import React, { Component } from 'react';
// components
import Picked from "./Picked";

class PickedIngs extends Component {

  handleChangeAmount = (amount, ingKey) => {
    this.props.onChangePickedIngAmount(amount, ingKey);
  }

  handleChangeUnit = ( unit, ingKey ) => {
    this.props.onChangePickedIngUnit(unit, ingKey);
  }

  handleRemoveIng = (ingKey) => {
    this.props.onRemoveIng(ingKey);
  }

  render() {

    let picked = this.props.picked;

    return (
      <React.Fragment>
        {picked==='undefined' || picked.length===0 ? <div></div> :
        <div id="picked_ings" className="form-group" style={{width:'100%'}}>
          <ul>
            {picked.map((ing, i) => {
              return (
                <Picked key={i} ingKey={i} picked={ing} onChangeAmount={this.handleChangeAmount} onChangeUnit={this.handleChangeUnit} onRemoveIng={this.handleRemoveIng} />
              )
            })}
          </ul>
        </div>}
      </React.Fragment>
    )
  }
}

export default PickedIngs;
