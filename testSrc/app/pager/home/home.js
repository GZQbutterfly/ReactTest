import './home.less';
// ===>
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

let user = {
    firstName: 'Harper<a>kink</a>',
    lastName: 'Perez'
};

let element =(<div>
                <div className="btn-group">
                   <button className="btn btn-primary"> default</button>
                   <button className="btn btn-info"> info</button>
                </div>
                <div id="dateDetail"></div>
                <div id="clickTest"></div>
              </div>);

let dom = ReactDom.render(
    element,
    document.getElementById('root')
);

function tick() {
  const element = (<p>{new Date().toLocaleTimeString()}</p>);
  ReactDom.render(
    element,
    document.getElementById('dateDetail')
  );
}
tick();
setInterval(tick, 1000);

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDom.render(
  <Toggle />,
  document.getElementById('clickTest')
);
// ===>
export default {
    module: 'home'
};
