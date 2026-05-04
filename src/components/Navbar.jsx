import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const items = ["home", "about", "projects", "contact"];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Rehan
        </Typography>

        <Box>
          {items.map((item) => (
            <Button
              key={item}
              href={`#${item}`}
              onClick={() => setActive(item)}
              sx={{
                color: active === item ? "#FFD700" : "#fff",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}