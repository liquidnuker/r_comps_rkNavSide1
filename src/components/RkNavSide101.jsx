export default class RkNavSide101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // property1: ""
    };

    // 
    this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // property1: store.state
    }));
  }

  render() {
    return (
      <nav className="rknavSide101" role="navigation">
        <h3 className="rknavSide101_heading">Nav Title</h3>
        <ul>
          <li><a href="" tabindex="0" aria-setsize="5" aria-posinset="1">Link one</a></li>
          <li><a href="" tabindex="0" aria-setsize="5" aria-posinset="2">Link one</a></li>
          <li><a href="" tabindex="0" aria-setsize="5" aria-posinset="3">Link one</a></li>
          <li><a href="" tabindex="0" aria-setsize="5" aria-posinset="4">Link one</a></li>
          <li><a href="" tabindex="0" aria-setsize="5" aria-posinset="5">Link one</a></li>
        </ul>
      </nav>
    );
  }
}