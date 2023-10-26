import React, { Component } from "react";
import { List, Grid } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default class Cards extends Component {
  render() {
    return (
      <div
        style={{
        
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <List sx={{ maxWidth: 400, bgcolor: "transparent" }}>
              <ListItem>
                <ListItemAvatar>
                  <MenuBookIcon color="warning" />
                </ListItemAvatar>
                <div>
                  <ListItemText>Strategy 1: Early Bird </ListItemText>
                  <ListItemText
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    primary={
                      <Typography variant="body1">
                        <span style={{ color: "#3E30C2" }}> Foundation</span>{" "}
                        (Course Weightage: 20%)
                      </Typography>
                    }
                    secondary="It starts with videos & PDFs followed by quizes & analytics."
                  ></ListItemText>
                </div>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <WorkIcon color="success" />
                </ListItemAvatar>
                <div>
                  <ListItemText>Strategy 1: Early Bird </ListItemText>
                  <ListItemText
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    primary={
                      <Typography variant="body1">
                        <span style={{ color: "#3E30C2" }}> Foundation</span>{" "}
                        (Course Weightage: 20%)
                      </Typography>
                    }
                    secondary="It starts with videos & PDFs followed by quizes & analytics."
                  ></ListItemText>
                </div>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <BeachAccessIcon color="primary" />
                </ListItemAvatar>
                <div>
                  <ListItemText>Strategy 1: Early Bird </ListItemText>
                  <ListItemText
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    primary={
                      <Typography variant="body1">
                        <span style={{ color: "#3E30C2" }}> Foundation</span>{" "}
                        (Course Weightage: 20%)
                      </Typography>
                    }
                    secondary="It starts with videos & PDFs followed by quizes & analytics."
                  ></ListItemText>
                </div>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <WorkIcon color="danger" />
                </ListItemAvatar>
                <div>
                  <ListItemText>Strategy 1: Early Bird </ListItemText>
                  <ListItemText
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    primary={
                      <Typography variant="body1">
                        <span style={{ color: "#3E30C2" }}> Foundation</span>{" "}
                        (Course Weightage: 20%)
                      </Typography>
                    }
                    secondary="It starts with videos & PDFs followed by quizes & analytics."
                  ></ListItemText>
                </div>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <BeachAccessIcon color="info" />
                </ListItemAvatar>
                <div>
                  <ListItemText>Strategy 1: Early Bird </ListItemText>
                  <ListItemText
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    primary={
                      <Typography variant="body1">
                        <span style={{ color: "#3E30C2" }}> Foundation</span>{" "}
                        (Course Weightage: 20%)
                      </Typography>
                    }
                    secondary="It starts with videos & PDFs followed by quizes & analytics."
                  ></ListItemText>
                </div>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Grid
              sx={{
                width: "100%",
                maxWidth: 375,
                padding: "10px",
                bgcolor: "#D8DFF8",
              }}
            >
              <Grid>
                <Typography variant="h5" component="h2" textAlign="center">
                  Special Focus
                </Typography>
              </Grid>
              <Grid>
                <Button
                  startIcon={<ChatBubbleIcon />}
                  variant="contained"
                  style={{ backgroundColor: "#8980E7" }}
                >
                  Current Affairs
                </Button>
                <Button
                  startIcon={<ChatBubbleIcon />}
                  variant="contained"
                  style={{ backgroundColor: "#8980E7", marginLeft: "3px" }}
                >
                  Doubt Clear
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
