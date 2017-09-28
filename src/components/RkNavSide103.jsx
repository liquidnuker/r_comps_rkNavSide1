function RkNavSide103_links(props) {
  return (
    <ul>
    {props.pr_links.map((i, index) =>
      <li key={i.linkName + index}>
      <div className="rknavSide103_img-holder">
      <img src={i.imgSrc} alt={i.imgAlt} title={i.imgTitle} />
      </div>
      <a href={i.link} tabindex="0" aria-setsize={props.pr_links.length} aria-posinset={index + 1}>
      {i.linkName}
      </a>
      <p>{i.linkDesc}</p>
      </li>
      )}
    </ul>
  );
}

export default class RkNavSide103 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          imgSrc: "img1.jpg",
          imgAlt: "img alt 1",
          imgTitle: "img title 1",
          link: "http://",
          linkName: "Link One",
          linkDesc: "Link one description"
        },
        {
          imgSrc: "img2.jpg",
          imgAlt: "img alt 2",
          imgTitle: "img title 2",
          link: "http://",
          linkName: "Link Two",
          linkDesc: "Link two description"
        },
        {
          imgSrc: "img2.jpg",
          imgAlt: "img alt 2",
          imgTitle: "img title 2",
          link: "http://",
          linkName: "Link Three",
          linkDesc: "Link three description"
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
      <nav className="rknavSide103" role="navigation">
        <h3 className="rknavSide103_heading">Nav Title</h3>
        <RkNavSide103_links pr_links={this.state.links} />
      </nav>
    );
  }
}