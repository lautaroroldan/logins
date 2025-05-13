import { Link } from "react-router";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/google">Google</Link>
        </div>
    )
}

export default Home;