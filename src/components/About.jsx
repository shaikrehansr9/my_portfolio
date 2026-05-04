import {
  Container,
  Typography,
  Box,
  Card,
  CardContent
} from "@mui/material";

export default function About() {

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
    <Box id="about" sx={{ py: 12, background: "#000" }}>
      <Container maxWidth="md">

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={6}
          textAlign="center"
        >
          About
        </Typography>

        {/* Card */}
        <Card sx={cardStyle}>

          {headerBar("About Me")}

          <CardContent>

            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              I’m a MERN stack developer focused on building scalable backend systems
              and clean, efficient web applications. I enjoy working on real-world
              problems, especially those involving data handling, APIs.
            </Typography>

            <Typography color="text.secondary" mt={2} sx={{ lineHeight: 1.8 }}>
              My goal is to grow as a software developer by mastering backend architecture,
              improving problem-solving skills, and building projects that create real impact.
            </Typography>

            <Typography color="text.secondary" mt={2} sx={{ lineHeight: 1.8 }}>
              Currently, I’m strengthening my skills in Data Structures & Algorithms and
              preparing for software development roles in tech companies.
            </Typography>

          </CardContent>
        </Card>

      </Container>
    </Box>
  );
}