import SearchBar from "../../components/searchBar/SearchBar"
import "./HomePage.scss"
const HomePage = () => {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">
                Find Real Estate & Get Your Dream Place.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, iste totam! Commodi harum, aperiam cum quasi magnam, error, architecto non recusandae consequuntur dolores voluptatibus. Repellat eum est dolorem amet iusto quam! Ea ex, numquam, consectetur repellat eaque asperiores sunt impedit deserunt est, nesciunt ratione odit excepturi neque. Alias, corporis nam.</p>
            <SearchBar />
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Awards Gained</h2>
                </div>
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="bg" />
        </div>
    </div>
  )
}

export default HomePage