var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Hello React!!!</h3>
        <p>This is from a component!</p>
      </div>
    );
  }
})



ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
