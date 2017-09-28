function RkNavSide102_links(props) {
  return (
    <ul>
    {props.pr_links.map((i, index) =>
      <li key={i.linkName + index}>
      <div className="rknavSide102_img-holder">
      <img src={i.imgSrc} alt={i.imgAlt} title={i.imgTitle} />
      </div>
      <a href={i.link} tabindex="0" 
      aria-setsize={props.pr_links.length} aria-posinset={index + 1}>{i.linkName}</a>
      </li>
      )}
    </ul>
  );
}

export default class RkNavSide102 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          imgSrc: "img1.jpg",
          imgAlt: "img1 alt",
          imgTitle: "img1 title",
          link: "http://",
          linkName: "Link One"
        },
        {
          imgSrc: "img2.jpg",
          imgAlt: "img2 alt",
          imgTitle: "img2 title",
          link: "http://",
          linkName: "Link Two"
        },
        {
          imgSrc: "img3.jpg",
          imgAlt: "img3 alt",
          imgTitle: "img3 title",
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
      <nav className="rknavSide102" role="navigation">
        <h3 className="rknavSide102_heading">Nav Title</h3>
        <RkNavSide102_links pr_links={this.state.links} />
      </nav>
    );
  }
}