import { Container, Divider, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { addToCart, fetchProducts } from "../../api/api";
import { ProductCard } from "../ProductCard/ProductCard";

export const Cards = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetchProducts("products")
            .then(data => setProducts(data))
            .catch(error => setError(error.message))
    }, [])
    return <Container>
        <Typography mb={4} variant="h5">Products</Typography>
        <Divider />
        {error ? (<Typography>{error}</Typography>) : (
            <Stack mt={4} mb={16} direction="row" flexWrap="wrap" justifyContent="space-between" gap={10}>
                {products.map(product => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
            </Stack>
        )}

    </Container>
}