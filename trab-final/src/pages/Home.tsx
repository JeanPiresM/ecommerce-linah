import { useState } from "react"
import Banner from "../components/Banner"
import ProductList from "../components/ProductsList"
import SearchBar from "../components/SearchBar"

const Home = () => {
    const [query, setQuery] = useState<string>('')
    return (
        <>
        <Banner/>
        <h1 style={{textAlign:"center", padding: 50}}>Check out our catalog</h1>
        <SearchBar onSearch={setQuery}/>
        <ProductList query={query}/>
        </>
    )
}

export default Home