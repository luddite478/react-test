import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'


const DottedBox = () => (
  <div className="DottedBox">
    <p className="DottedBox_content">Get started with CSS styling</p>
  </div>
);


ReactDOM.render(<DottedBox />, document.getElementById('app'));
