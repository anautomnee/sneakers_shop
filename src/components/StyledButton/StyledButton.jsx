import { styled } from "@mui/material"

export const StyledButton = styled("button")({
    width: 37,
    height: 37,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
    borderRadius: "50%",
    border: "1px solid #68666680",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
        backgroundColor: "#03060F",
        border: "3px solid #2A2B3033",
        color: "#FFFFFF"
    }
})