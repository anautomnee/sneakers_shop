import { Box, Container, Divider, Stack, Typography } from "@mui/material"
import { Footer, Header, CartItem } from "../components"
import { useEffect, useState } from "react";
import { fetchProducts, removeFromCart } from "../api/api";

export const Cart = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [total, setTotal] = useState(0)
    useEffect(() => {
        fetchProducts("cart")
            .then(data => setProducts(data))
            .catch(error => setError(error.message))

    }, [])
    useEffect(() => {
        const total = products.reduce((red, el) => {
            return (red + el.price)
        }, 0);
        setTotal(total);

    }, [products])

    const removeProduct = (id) => {
        removeFromCart(id);
        setProducts(products.filter((el) => el.id !== id));
    }
    return <>
        <Header />
        <Container sx={{ minHeight: "78vh" }}>
            <Typography mb={4} variant="h5">Cart</Typography>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
                <Box>
                    {error ? (<Typography>{error}</Typography>) : (
                        <Stack mt={4} mb={16} direction="row" flexWrap="wrap" justifyContent="space-between" gap={6}>
                            {products.map(product => <CartItem key={product.id} product={product} removeProduct={removeProduct} />)}
                        </Stack>
                    )}
                </Box>
                <Stack direction="column" sx={{
                    backgroundColor: "#FAFAFA",
                    padding: "28px",
                    height: "fit-content",
                    mt: 4,
                    minWidth: 320
                }}>
                    <Typography sx={{
                        alignSelf: "center",
                        fontWeight: 700,
                        mb: 4
                    }} variant="h5">Total</Typography>
                    {products.map(product => <Typography mb={3} key={product.id}>{product.name}</Typography>)}
                    <Divider />
                    <Typography mt={2} fontWeight="500" fontSize="14px">Price</Typography>
                    <Typography fontWeight="700">{total} €</Typography>
                </Stack>
            </Stack>
        </Container>
        <Footer />
    </>
}