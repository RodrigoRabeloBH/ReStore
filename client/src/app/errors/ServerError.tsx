import { Container, Paper, Typography } from "@mui/material";

const ServerError = () => {
    return (
        <Container component={Paper}>
            <Typography variant="h5" gutterBottom>Server error</Typography>
        </Container>
    );
}

export default ServerError;