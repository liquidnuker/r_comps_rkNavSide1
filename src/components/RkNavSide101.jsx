function RknavSide101_list(props) {
  return (
    <ul>
      {props.pr_links.map((i, index) =>
        <li key={i.linkName + index}>
          <a href={i.link} tabindex="0" 
          aria-setsize={props.pr_links.length} aria-posinset={index + 1}>{i.linkName}</a>
        </li>
      )}
    </ul>
  );
}

export default class RkNavSide101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          link: "http://",
          linkName: "Link One"
        },
        {
          link: "http://",
          linkName: "Link Two"
        },
        {
          link: "http://",
          linkName: "Link Three"
        },
        {
          link: "http://",
          linkName: "Link Four"
        },
        {
          link: "http://",
          linkName: "Link Five"
        }
      ]
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
        <RknavSide101_list pr_links={this.state.links}/>
      </nav>
    );
  }
}