import { Box, Card, CardContent, CardActions, Typography, Stack, Link } from "@mui/material"
import { StyledButton } from "../StyledButton/StyledButton"
import { useState } from "react"

export const ProductCard = ({ product, addToCart }) => {
    const [added, setAdded] = useState(false);
    const addProduct = (product) => {
        addToCart(product);
        setAdded(true);
    }
    return <Card sx={{
        width: 320,
        padding: "32px",
        borderRadius: "42px"
    }}>
        <CardContent>
            < Box sx={{
                backgroundImage: `url(${product.image})`,
                backgroundRepeat: "no-repeat",
                height: 180,
                backgroundSize: "contain",
                backgroundPositionX: "center"
            }} />
            <Typography mb={3}>{product.name}</Typography>
        </CardContent>
        <CardActions sx={{
            display: "flex",
            justifyContent: "space-between"
        }} >
            <Box>
                <Typography>Price</Typography>
                <Typography sx={{ fontWeight: 600 }}>{product.price} €</Typography>
            </Box>
            <StyledButton onClick={() => addProduct(product)}>+</StyledButton>
        </CardActions>
        {added && <Stack direction="column" alignItems="center">
            <Typography>Added!</Typography>
            <Link href="/cart">Go to cart</Link>
        </Stack>}
    </Card>
}