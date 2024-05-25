import Banner from "../components/Banner"
import ProductList from "../components/ProductsList"
import SearchBar from "../components/SearchBar"

const Home = () => {
    return (
        <>
        <Banner/>
        <h1 style={{textAlign:"center", padding: 50}}>Check out our catalog</h1>
        <SearchBar/>
        <ProductList/>
        </>
    )
}
export default Home