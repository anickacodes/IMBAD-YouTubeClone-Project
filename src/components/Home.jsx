import { useState } from "react";
import SearchBar from "./SearchBar";

const Home = () => {

	

  return (
    <>
     
	  <div className="card videos">
				<div>
					{/* <h4>Videos Section PlaceHolder</h4> */}
					<SearchBar onSearch={handleSearch}/>

				</div>
			</div>
      {/* <h1>IMBAD</h1> */}
    </>
  );
};

// export default Home