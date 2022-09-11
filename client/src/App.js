import { useState, useEffect } from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import Map from "./Component/Map";

function App() {
  const StyledToolBar = styled(Toolbar)({
    justifyContent: "space-between",
    alignItems: "center",
  });
  const [data, Setdata] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      Setdata(res.data);
    });
  });

  return (
    <>
      <AppBar position="sticky">
        <StyledToolBar>
          <img
            width={100}
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1491216298/nfkeyj51nw9eqk1uc5av.png"
            alt="logo"
          />
        </StyledToolBar>
      </AppBar>
      <Stack direction='row' sx={{display:'flex',gap:2}} >
      <List  sx={{flex:1,display:'flex',flexDirection:'column',gap:3}} >
        <Paper>
        <ListItem  >
          <ListItemText  primary="Mode:" />
          <ListItemText sx={{color:"green"}} primary={data.mode} />
        </ListItem>
        </Paper>
        <Paper>
        <ListItem  >
          <ListItemText  primary="Roll:" />
          <ListItemText sx={{color:"green"}} primary={data.roll} />
        </ListItem>
        </Paper><Paper>
        <ListItem  >
          <ListItemText  primary="Pitch:" />
          <ListItemText sx={{color:"green"}} primary={data.pitch} />
        </ListItem>
        </Paper><Paper>
        <ListItem  >
          <ListItemText  primary="Yaw:" />
          <ListItemText sx={{color:"green"}} primary={data.yaw} />
        </ListItem>
        </Paper><Paper>
        <ListItem  >
          <ListItemText  primary="Heading:" />
          <ListItemText sx={{color:"green"}} primary={data.heading} />
        </ListItem>
        </Paper><Paper>
        <ListItem  >
          <ListItemText  primary="Lat:" />
          <ListItemText sx={{color:"green"}} primary={data.lat} />
        </ListItem>
        </Paper><Paper>
        <ListItem  >
          <ListItemText  primary="Long:" />
          <ListItemText sx={{color:"green"}} primary={data.long} />
        </ListItem>
        </Paper><Paper>
        <ListItem  >
          <ListItemText  primary="Alt:" />
          <ListItemText sx={{color:"green"}} primary={data.alt} />
        </ListItem>
        </Paper>
       
      </List>
      <Stack component={'div'} sx={{flex:4}} ><Map data={data}/></Stack>
      </Stack>
    </>
  ); 
}

export default App;
