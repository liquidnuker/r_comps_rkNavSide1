import RkNavSide101 from "./RkNavSide101.jsx";
import RkNavSide102 from "./RkNavSide102.jsx";
import RkNavSide103 from "./RkNavSide103.jsx";
import RkNavSide104 from "./RkNavSide104.jsx";

export default function Home(props) {
  return (
    <div>

  {/*rkNavSide101*/}
    <h2 className="item-id">rkNavSide101</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkNavSide101 />
      </div>
      <div className="col-sm-9">&nbsp;</div>
    </div>

  {/*rkNavSide102*/}
    <h2 className="item-id">rkNavSide102</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkNavSide102 />
      </div>
      <div className="col-sm-9">&nbsp;</div>
    </div>

  {/*rkNavSide103*/}
    <h2 className="item-id">rkNavSide103</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkNavSide103 />
      </div>
      <div className="col-sm-9">&nbsp;</div>
    </div>

  {/*rkNavSide104*/}
    <h2 className="item-id">rkNavSide104</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkNavSide104 />
      </div>
      <div className="col-sm-9">&nbsp;</div>
    </div>
    
    </div>
  );
}