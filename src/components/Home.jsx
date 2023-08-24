import { Link } from "react-router-dom";


export default function Home() {



	return (
	  <div>
		<h2>Home</h2>
		<Link to={'/Videos'}>
	<input type="text" placeholder="Search Videos Here" /> Search Videos Here
</Link>

	  </div>
	);
  }