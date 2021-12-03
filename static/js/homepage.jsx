'use strict';

function Homepage() {
  return  <React.Fragment>
    <p>Welcome to Balloonicorn's Trading Card Site!</p>
    <a  href="/cards">Click here to view trading cards!</a>
    <img id="balloonicorn" src="/static/img/balloonicorn.jpg"></img>

</React.Fragment>

}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
