import * as React from 'react';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Table,TableBody,TableCell,TableContainer,TableRow,Paper,
      styled,AppBar,Box,Toolbar,Typography,InputBase,Button} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

 const rows = [
//   createData('Automatic type conversion is possible in which of the possible cases?'),
//   createData('Who invented Java Programming?'),
//   createData('Which statement is true about Java?'),
//   createData('Which component is used to compile, debug and execute the java program…'),
//   createData('Which environment variable is used to set the java path?'),
//   createData('What is not the use of “this” keyword in Java?'),
//   createData('Which of the following is a type of polymorphism in Java Programming?'),
//   createData('What is Truncation in Java?'),
 ];





const  PreviewWindow=(props) => {
  console.log("editassess");
  const location=useLocation();
  console.log(location.state);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(props.state);
  return (
    <>
    
  <div style={{paddingTop:'75px'}}>
    <Navbar></Navbar>
    <div>
    <Box sx={{ flexGrow: 1 }} style={{background:'#ffffff'}}>
      <AppBar position="static" >
        <Toolbar style={{background:'#eeeeee',paddingRight:'20px'}}>
            
          <Typography
            variant="h6"
            noWrap
            component="div"
            align="center"
            style={{color:'#111111'}}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Preview
          </Typography>
          <div style={{paddingLeft:'20px'}}>
            <Button style={{background:'#BEBEBE',color:'#000000',paddingLeft:'5px',paddingRight:'5px'}} variant="contained">Close</Button>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    <div style={{paddingLeft:'40px',paddingRight:'40px',paddingTop:'25px'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h6>{row.name}</h6>
              </TableCell>
              <TableCell component="th" scope="row">
               
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </>
  );
}
export default PreviewWindow;
