export default class RkNavSide103 extends React.Component {
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
      <nav className="rknavSide103" role="navigation">
        <h3 className="rknavSide103_heading">Nav Title</h3>
        <ul>
          <li>
            <div className="rknavSide103_img-holder">
              <img src="img.jpg" alt="img alt" title="img title" />
            </div>
            <a href="" tabindex="0" aria-setsize="3" aria-posinset="1">
              Link one
            </a>
            <p>Link one description</p>
          </li>
          <li>
            <div className="rknavSide103_img-holder">
              <img src="img.jpg" alt="img alt" title="img title" />
            </div>
            <a href="" tabindex="0" aria-setsize="3" aria-posinset="2">
              Link one
            </a>
            <p>Link one description</p>
          </li>
          <li>
            <div className="rknavSide103_img-holder">
              <img src="img.jpg" alt="img alt" title="img title" />
            </div>
            <a href="" tabindex="0" aria-setsize="3" aria-posinset="3">
              Link one
            </a>
            <p>Link one description</p>
          </li>
        </ul>
      </nav>
    );
  }
}