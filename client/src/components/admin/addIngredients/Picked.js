import React, { Component } from 'react';
// components

class Picked extends Component {

  changeAmount = (e) => {
    let amount = e.target.value;
    let ingKey = this.props.ingKey;
    this.props.onChangeAmount(amount, ingKey);
  }

  changeUnit = (e) => {
    let unit = e.target.value;
    let ingKey = this.props.ingKey;
    this.props.onChangeUnit(unit, ingKey);
  }

  removeIng = (e) => {
    let ingKey = e.target.getAttribute("ingkey");
    this.props.onRemoveIng(ingKey);
  }

  checkIfFluid = (ing) => {
    let fluids = [ "vatten", "kranvatten", "mineralvatten", "bryggt", "juice", "sås", "dryck", "drick", "must", "olja", "olivolja", "rödvin", " vin", "yoghurt", "vinäger", "vinägrett", "A-fil", "rom", "öl", "cider" ];
    let units = [];
    if ( fluids.some(fluid => (ing.Namn.toLowerCase().indexOf(fluid) >= 0) || ing.Namn.toLowerCase().startsWith(fluid)) ) {
      units = ["ml", "dl"];
    } else {
      units = ["g", "kg"];
    };
    return units;
  }

  render() {

    let ing = this.props.picked;
    let amount = this.props.picked.ViktGram;
    let units = this.checkIfFluid(ing);

    return (
      <React.Fragment>
        {ing==='undefined' || ing.length===0 ? <li></li> :
        <li>
          <span className="ing">{ing.Namn}</span>
          <div className="ctrls">
            <span>amount: </span>
            <input onChange={this.changeAmount} value={amount} type="number" />
            <span className="measuringUnit">
              <select onChange={this.changeUnit}>
                {units.map((u, i) => {
                  return (
                    <option key={i} value={u}>{u}</option>
                  )
                })}
              </select>
            </span>
            <i className="icon-cancel" onClick={this.removeIng} ingkey={this.props.ingKey}></i>
          </div>
        </li>}
      </React.Fragment>
    )
  }
}

export default Picked;
