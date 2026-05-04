import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Chip
} from "@mui/material";
import Reveal from "./Reveal";

export default function Experience() {

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
    <Box id="experience" sx={{ py: 12, background: "#000" }}>
      <Container maxWidth="md">

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={6}
          textAlign="center"
        >
          Experience
        </Typography>

        {/* Animated Card */}
        <Reveal>
          <Card sx={cardStyle}>

            {headerBar("Internship Experience")}

            <CardContent>

              {/* Role */}
              <Typography variant="h6" fontWeight="bold">
                Backend Intern — IIT Ropar
              </Typography>

              {/* Duration */}
              <Typography color="text.secondary" mt={0.5}>
                Jan 2026 – Mar 2026
              </Typography>

              {/* Description */}
              <Stack spacing={1} mt={3}>
                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Developed backend data models for Teacher, Student, and Cohort systems
                </Typography>

                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Implemented authentication features including login and registration
                </Typography>

                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Built REST APIs and integrated them with frontend components
                </Typography>
              </Stack>

              {/* Tech */}
              <Stack direction="row" spacing={1} mt={3} flexWrap="wrap">
                {["Node.js", "MongoDB", "REST APIs", "Authentication"].map((tech) => (
                  <Chip key={tech} label={tech} sx={chipStyle} />
                ))}
              </Stack>

            </CardContent>
          </Card>
        </Reveal>

      </Container>
    </Box>
  );
}