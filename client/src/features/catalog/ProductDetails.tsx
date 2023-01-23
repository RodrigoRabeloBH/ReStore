import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, []);
    return (
        <Typography variant="h6">
            Product Details
        </Typography>
    );
}

export default ProductDetails;