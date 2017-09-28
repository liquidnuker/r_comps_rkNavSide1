function RkNavSide104_links(props) {
  return (
    <ul>
    {props.pr_links.map((i, index) =>
      <li key={i.linkName + index}>
      <div className="rknavSide104_img-holder">
      <span>{i.icon}</span>
      </div>
      <a href={i.link} tabindex="0" 
      aria-setsize={props.pr_links.length} aria-posinset={index + 1}>{i.linkName}</a>
      </li>
      )}
    </ul>
  );
}

export default class RkNavSide104 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          icon: "1",
          link: "http://",
          linkName: "Link One"
        },
        {
          icon: "2",
          link: "http://",
          linkName: "Link Two"
        },
        {
          icon: "3",
          link: "http://",
          linkName: "Link Three"
        }
      ]
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
        <RkNavSide104_links pr_links={this.state.links} />
      </nav>
    );
  }
}