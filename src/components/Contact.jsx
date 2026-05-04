import {
  Container,
  Typography,
  Stack,
  Button,
  Box,
  Card,
  CardContent
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Reveal from "./Reveal";

export default function Contact() {

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
    <Box id="contact" sx={{ py: 12, background: "#000" }}>
      <Container maxWidth="sm">

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
        >
          Contact
        </Typography>

        {/* Animated Card */}
        <Reveal>
          <Card sx={cardStyle}>

            {headerBar("Get in Touch")}

            <CardContent sx={{ textAlign: "center" }}>

              <Typography color="text.secondary" mb={4}>
                Let’s build something impactful together.
              </Typography>

              {/* Buttons */}
              <Stack spacing={2}>

                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<EmailIcon />}
                  href="mailto:shaikrehan91000@gmail.com"
                  sx={{
                    background: "#FF0000",
                    py: 1.3,
                    fontWeight: "bold",
                    borderRadius: "10px",
                    "&:hover": {
                      boxShadow: "0 0 20px #FF0000",
                    },
                  }}
                >
                  Email Me
                </Button>

                <Stack direction="row" spacing={2}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/shaikrehansr9"
                    target="_blank"
                    sx={{
                      borderColor: "#FF0000",
                      color: "#FF0000",
                      borderRadius: "10px",
                      "&:hover": {
                        background: "rgba(255,0,0,0.1)",
                      },
                    }}
                  >
                    GitHub
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/shaik-rehan-418361259/"
                    target="_blank"
                    sx={{
                      borderColor: "#FFD700",
                      color: "#FFD700",
                      borderRadius: "10px",
                      "&:hover": {
                        background: "rgba(255,215,0,0.1)",
                      },
                    }}
                  >
                    LinkedIn
                  </Button>
                </Stack>

              </Stack>

              {/* Email Text */}
              <Typography color="text.secondary" mt={4}>
                shaikrehan91000@gmail.com
              </Typography>

            </CardContent>
          </Card>
        </Reveal>

      </Container>
    </Box>
  );
}