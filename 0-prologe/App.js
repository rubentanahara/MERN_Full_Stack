class App extends React.Component {
  state = {
    btn_color: "button_red",
  };

  onClick = (event) => {
    this.setState({
      btn_color: " button_grey",
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.onClick} className={this.state.btn_color}>
          Click me!
        </button>
      </div>
    );
  }
}
// render App component

ReactDOM.render(<App />, document.querySelector("#root"));
