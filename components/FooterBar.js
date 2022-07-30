import React, { useState } from "react";
import { SiWindows95 } from "react-icons/si";
import {
  AppBar,
  List,
  Toolbar,
  Button,
  ListItem,
  Divider,
  TextField,
} from "react95";

export default function FooterBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-auto">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <SiWindows95 />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                bottom: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                Profile
              </ListItem>
              <ListItem>
                <span role="img" aria-label="📁">
                  📁
                </span>
                My account
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <TextField placeholder="Search..." width={150} />
      </Toolbar>
    </div>
  );
}
