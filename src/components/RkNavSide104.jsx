export default class RkNavSide104 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // property1: ""
    };

    // 
    // this.method1 = this.method1.bind(this);
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
      <nav className="rknavSide104" role="navigation">
        <h3 className="rknavSide104_heading">Nav Title</h3>
        <ul>
          <li>
            <div className="rknavSide104_img-holder">
              <span>s</span>
            </div>
            <a href="" tabindex="0" aria-setsize="4" aria-posinset="1">link one</a>
          </li>
          <li>
            <div className="rknavSide104_img-holder">
              <span>s</span>
            </div>
            <a href="" tabindex="0" aria-setsize="4" aria-posinset="2">link one</a>
          </li>
          <li>
            <div className="rknavSide104_img-holder">
              <span>s</span>
            </div>
            <a href="" tabindex="0" aria-setsize="4" aria-posinset="3">link one</a>
          </li>
          <li>
            <div className="rknavSide104_img-holder">
              <span>s</span>
            </div>
            <a href="" tabindex="0" aria-setsize="4" aria-posinset="4">link one</a>
          </li>
        </ul>
      </nav>
    );
  }
}