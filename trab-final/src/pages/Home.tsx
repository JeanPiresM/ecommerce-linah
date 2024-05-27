import { useState } from "react"
import Banner from "../components/Banner"
import ProductList from "../components/ProductsList"
import SearchBar from "../components/SearchBar"
import Cards from "../components/Cards"


const Home = () => {
    const [query, setQuery] = useState<string>('')
    return (
        <>
        <Banner/>
        <Cards/>
        <h1 style={{textAlign:"center", paddingTop: 130, paddingBottom: 50, color: 'white', fontSize: 60, fontWeight: 'bold'}}>explore nosso catálogo</h1>
        <SearchBar onSearch={setQuery}/>
        <ProductList query={query}/>
        </>
    )
}

export default Home