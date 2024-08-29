import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return <AppBar sx={{
        backgroundColor: "#3B3C3D",
        mb: 3
    }} position="static">
        <Container>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Typography variant="h6">Sneakers shop</Typography>
                <Toolbar>
                    <Stack direction="row" gap={8}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </Stack>
                </Toolbar>
            </Stack>
        </Container>
    </AppBar>
}