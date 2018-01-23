import React, { Component } from 'react';

class UserCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {image, name, description} = this.props
    return (
      <div className="Card" style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: 'teal', borderRadius: 20, borderWidth: 1, paddingTop: 10, textAlign: 'center'}}>
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: 'red'}}>
          <div style={{flex: 0, marginLeft: 20, backgroundColor: 'green'}}> 
            <img src={image} height="250" width="250"/>
          </div>
          <div style={{flex: 1, backgroundColor: 'blue'}}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div styles={{flex: 1, backgroundColor: 'yellow'}}>
          proyectos vienen aqui
        </div>
      </div>
    );
  }
}

export default UserCard;
