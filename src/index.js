import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import L from 'leaflet';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.map = L.map(this.myRef.current, {
      center: [50.9413, 6.9583],
      zoom: 13,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OSM</a> contributors'
        }),
      ]
    });
  }

  render() {
    return (
      <div>
        <div ref={this.myRef} style={{height : '270px', width: '400px'}}></div>
      </div >
    )
  }
}

class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>Sample Map output</h1>
        <Map></Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
