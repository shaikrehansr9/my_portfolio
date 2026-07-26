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
                Full-Stack Development Intern | IIT Ropar (via NPTEL)
              </Typography>

              {/* Duration */}
              <Typography color="text.secondary" mt={0.5}>
                Jan 2026 – Mar 2026
              </Typography>

              {/* Description */}
              <Stack spacing={1} mt={3}>
                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Completed MERN-stack training and a technical viva as part of the internship program
                </Typography>

                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Worked on a mentor-guided academic cohort-management project for teacher and student workflows
                </Typography>

                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Implemented JWT-based authentication and role-based authorization for teacher and student access
                </Typography>

                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Built 6+ reusable React components and improved features based on mentor feedback
                </Typography>

                <Typography sx={{ fontSize: "0.95rem" }}>
                  • Collaborated with the team on GitHub and was later selected to evaluate peer interns’ viva assessments
                </Typography>
              </Stack>

              {/* Tech */}
              <Stack direction="row" spacing={1} mt={3} flexWrap="wrap">
                {["React.js", "Node.js", "MongoDB", "JWT", "GitHub"].map((tech) => (
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