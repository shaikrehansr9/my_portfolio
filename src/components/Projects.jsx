import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
  Box
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 12, background: "#000" }}>
      <Container maxWidth="lg">

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={6}
          textAlign="center"
        >
          Projects
        </Typography>

        <Grid container spacing={4}>

          {/* ================= HomeShare ================= */}
          <Grid item xs={12} md={6}>
            <Reveal>
              <Card
                sx={{
                  background: "#0a0a0a",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 0 20px #FF0000",
                  },
                }}
              >

                {/* Header */}
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FF0000" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FFD700" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#444" }} />

                  <Typography sx={{ ml: 2, fontSize: "0.9rem", color: "#9ca3af" }}>
                    HomeShare
                  </Typography>
                </Box>

                <CardContent>

                  <Typography variant="h6" fontWeight="bold">
                    HomeShare
                  </Typography>

                  <Typography color="text.secondary" mt={1}>
                    Full-stack rental platform with authentication and CRUD functionality.
                  </Typography>

                  <Stack spacing={0.8} mt={2}>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      • CRUD property listings
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      • Session-based authentication
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      • Deployed live backend
                    </Typography>
                  </Stack>

                  {/* 🔥 PREMIUM SECTION */}
                  <Stack mt={3} spacing={3}>

                    {/* Tech Stack */}
                    <Stack direction="row" spacing={1.5} flexWrap="wrap">
                      {["Node.js", "MongoDB", "EJS"].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            background: "#111",
                            color: "#fff",
                            border: "1px solid #FF0000",
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Buttons */}
                    <Stack direction="row" spacing={2}>
                      <Button
                        fullWidth
                        startIcon={<GitHubIcon />}
                        href="https://github.com/shaikrehansr9/HomeShare"
                        target="_blank"
                        variant="outlined"
                        sx={{
                          borderColor: "#FF0000",
                          color: "#FF0000",
                          height: 42,
                          borderRadius: "10px",
                        }}
                      >
                        Code
                      </Button>

                      <Button
                        fullWidth
                        startIcon={<LaunchIcon />}
                        href="https://homeshare-majc.onrender.com/listings"
                        target="_blank"
                        variant="contained"
                        sx={{
                          background: "#FF0000",
                          height: 42,
                          borderRadius: "10px",
                        }}
                      >
                        Live
                      </Button>
                    </Stack>

                  </Stack>

                </CardContent>
              </Card>
            </Reveal>
          </Grid>

          {/* ================= DevConnect ================= */}
          <Grid item xs={12} md={6}>
            <Reveal delay={0.08}>
              <Card
                sx={{
                  background: "#0a0a0a",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 0 20px #FF0000",
                  },
                }}
              >

                {/* Header */}
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FF0000" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FFD700" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#444" }} />

                  <Typography sx={{ ml: 2, fontSize: "0.9rem", color: "#9ca3af" }}>
                    DevConnect
                  </Typography>
                </Box>

                <CardContent>

                  <Typography variant="h6" fontWeight="bold">
                    DevConnect
                  </Typography>

                  <Typography color="text.secondary" mt={1}>
                    MERN-based social platform with authentication and post system.
                  </Typography>

                  <Stack spacing={0.8} mt={2}>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      • REST APIs for posts & users
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      • Dynamic React components
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      • MongoDB integration
                    </Typography>
                  </Stack>

                  {/* 🔥 PREMIUM SECTION */}
                  <Stack mt={3} spacing={3}>

                    {/* Tech Stack */}
                    <Stack direction="row" spacing={1.5} flexWrap="wrap">
                      {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            background: "#111",
                            color: "#fff",
                            border: "1px solid #FF0000",
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Buttons */}
                    <Stack direction="row" spacing={2}>
                      <Button
                        fullWidth
                        startIcon={<GitHubIcon />}
                        href="https://github.com/shaikrehansr9/Dev-Connect"
                        target="_blank"
                        variant="outlined"
                        sx={{
                          borderColor: "#FF0000",
                          color: "#FF0000",
                          height: 42,
                          borderRadius: "10px",
                        }}
                      >
                        Code
                      </Button>

                      <Button
                        fullWidth
                        startIcon={<LaunchIcon />}
                        disabled
                        variant="contained"
                        sx={{
                          background: "#333",
                          height: 42,
                          borderRadius: "10px",
                        }}
                      >
                        Coming Soon
                      </Button>
                    </Stack>

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