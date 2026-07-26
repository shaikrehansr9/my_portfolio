import { Container, Typography, Button, Stack, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Scene3D from "./Scene3D";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          background: "#FF0000",
          filter: "blur(200px)",
          opacity: 0.15,
        }}
      />
      {/* 3D */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          opacity: 0.3,
        }}
      >
        <Scene3D />
      </Box>
      <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 2 }}>
        {/* 🔥 NAME ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
            }}
          >
            Shaik Rehan
            <br />
            <span style={{ color: "#FF0000" }}>Ur Rahman</span>
          </Typography>
        </motion.div>
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typography sx={{ mt: 2, color: "#9ca3af" }}>
            MERN STACK DEVELOPER | BACKEND ENGINEER
          </Typography>
        </motion.div>
        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.7 }}
        >
          <Box
            sx={{
              height: 4,
              background: "#FFD700",
              margin: "16px auto",
              borderRadius: 5,
            }}
          />
        </motion.div>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Stack direction="row" spacing={3} justifyContent="center" mt={4}>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              href="https://drive.google.com/file/d/18vqrKVfapH8Kfl90pw24YemejqEsHsE5/view?usp=drive_link"
              target="_blank"
              sx={{
                background: "#FF0000",
                "&:hover": {
                  boxShadow: "0 0 20px #FF0000, 0 0 40px #FFD700",
                },
              }}
            >
              View Resume
            </Button>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              href="https://drive.google.com/uc?export=download&id=18vqrKVfapH8Kfl90pw24YemejqEsHsE5"
              sx={{
                borderColor: "#FF0000",
                color: "#FF0000",
              }}
            >
              Download Resume
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}