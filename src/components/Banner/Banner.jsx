import { Box, Container } from "@mui/material"
import banner from "../../assets/Banner.jpg"

export const Banner = () => {
    return <Container>
        <Box sx={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            height: 480,
            backgroundSize: "contain",
        }} />
    </Container>
}