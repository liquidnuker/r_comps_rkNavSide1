import RkNavSide101 from "./RkNavSide101.jsx";
import RkNavSide102 from "./RkNavSide102.jsx";

export default function Home(props) {
  return (
    <div>

  {/*rkNavSide101*/}
    <h2 className="item-id">rkNavSide101</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkNavSide101 />
      </div>
      <div className="col-sm-9">39</div>
    </div>

  {/*rkNavSide102*/}
    <h2 className="item-id">rkNavSide102</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkNavSide102 />
      </div>
      <div className="col-sm-9">39</div>
    </div>
    
    </div>
  );
}