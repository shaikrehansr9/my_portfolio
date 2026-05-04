import { Container, Grid, Typography, Box } from "@mui/material";

export default function Stats() {
  const stats = [
    { value: "2+", label: "Projects Built" },
    { value: "5+", label: "Technologies Used" },
    { value: "1", label: "Internship Experience" },
    { value: "100+", label: "DSA Problems" },
  ];

  return (
    <Box sx={{ py: 8, background: "#000" }}>
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#FF0000",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}