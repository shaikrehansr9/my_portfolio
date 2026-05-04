import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Box
} from "@mui/material";
import Reveal from "./Reveal";

export default function Skills() {

  const cardStyle = {
    background: "#0a0a0a",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 0 20px #FF0000",
    },
  };

  const chipStyle = {
    background: "#111",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s",
    "&:hover": {
      borderColor: "#FF0000",
      boxShadow: "0 0 10px #FF0000",
    },
  };

  const headerBar = (title) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 2,
        py: 1,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FF0000" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FFD700" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#444" }} />

      <Typography sx={{ ml: 2, fontSize: "0.9rem", color: "#9ca3af" }}>
        {title}
      </Typography>
    </Box>
  );

  return (
    <Box id="skills" sx={{ py: 12, background: "#000" }}>
      <Container maxWidth="lg">

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={6}
          textAlign="center"
        >
          Skills
        </Typography>

        <Grid container spacing={4}>

          {/* Languages */}
          <Grid item xs={12} md={6}>
            <Reveal>
              <Card sx={cardStyle}>
                {headerBar("Languages")}
                <CardContent>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {["C++", "Python", "JavaScript", "Java"].map((s) => (
                      <Chip key={s} label={s} sx={chipStyle} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>

          {/* Frontend */}
          <Grid item xs={12} md={6}>
            <Reveal delay={0.05}>
              <Card sx={cardStyle}>
                {headerBar("Frontend")}
                <CardContent>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {["HTML", "CSS", "React", "Bootstrap"].map((s) => (
                      <Chip key={s} label={s} sx={chipStyle} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>

          {/* Backend */}
          <Grid item xs={12} md={6}>
            <Reveal delay={0.1}>
              <Card sx={cardStyle}>
                {headerBar("Backend")}
                <CardContent>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {["Node.js", "Express.js", "REST APIs", "Authentication"].map((s) => (
                      <Chip key={s} label={s} sx={chipStyle} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>

          {/* Databases */}
          <Grid item xs={12} md={6}>
            <Reveal delay={0.15}>
              <Card sx={cardStyle}>
                {headerBar("Databases")}
                <CardContent>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {["MongoDB", "MySQL"].map((s) => (
                      <Chip key={s} label={s} sx={chipStyle} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>

          {/* Tools */}
          <Grid item xs={12}>
            <Reveal delay={0.2}>
              <Card sx={cardStyle}>
                {headerBar("Tools & Concepts")}
                <CardContent>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {["Git", "GitHub", "VS Code", "OOP", "DSA", "MVC"].map((s) => (
                      <Chip key={s} label={s} sx={chipStyle} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}