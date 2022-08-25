import * as React from "react";
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Button,OutlinedInput ,InputLabel ,MenuItem,FormControl,Select,AppBar} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,IconButton ,Paper,Box,Table,TableBody,TableCell,TableContainer,alpha,
        TableRow,TableSortLabel,Toolbar,Typography,Checkbox,Tooltip,FormControlLabel,Switch,Stack, TextField} from "@mui/material";
import Navbar from "./Navbar";
import TableHead from '@mui/material/TableHead';
import PreviewWindow from './PreviewWindow';




function createData(question, option1, option2, option3, option4,answer) {
  return { question, option1, option2, option3, option4,answer };
}

const rows = [
  createData('Which of the following is not an OOPS concept?', 'Encapsulation', 'Polymorphism','Exception', 'Abstraction','Exception'),
  createData('Which type of members cant be accessed in derived classes of a base class?', 'All can be accessed', 'Protected','Private', 'Public','Private'),
  createData(' Which inheritance type is used in the class given below? class A : public X, public Y {}', 'Multilevel inheritance', 'Multiple inheritance','Hybrid inheritance', 'Hierarchical inheritance','Multiple inheritance'),
  createData('What happens if non static members are used in static member function?','Executes fine', 'Compile Time Error', 'Executes if that member is unused', 'Runtime Error','Executes fine'),
  createData('Which class cannot create its instance?','Parent Class', 'Nested Class', 'Anonymous class', 'Abstract Class','Abstract Class'),
  
];
const names = [
    'OOP',
    'C',
    'C++',
    'Java',
    'DS',
    'DBMS',
    'Logical Reasoning',
    'English',
    'Java script',
    'Management Consultant',
    'Apptitude',
  ];



//----------------------------------------------------Actual function to be exported--------------------------
 function AddAssessment() {
  const [order, setOrder] = React.useState("asc");
  const [selected, setSelected] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [assessmentsPerPage, setAssessmentsPerPage] = React.useState(5);
  const [assessments, setassessments]=React.useState([]);
  const[currentPage,setCurrentPage] = React.useState(1);
  const lastIndex = currentPage * assessmentsPerPage;
  const firstIndex = lastIndex - assessmentsPerPage;
  const currentassessments = assessments && assessments.slice(firstIndex,lastIndex);
  const totalPages = Math.ceil(assessments.length/assessmentsPerPage);
  const [questionProps, setQuestionProps] =React.useState(false);
  const [editopen, setEditOpen] = React.useState(false);
  const[list, setList]=React.useState([]);
  const[saveOpen,saveEditOpen]=React.useState();
  //const [questionProps, setQuestionProps] =React.useState(false);

 
  const [option1, setOption1] = React.useState('')
  const [option2, setOption2] = React.useState('')
  const [option3, setOption3] = React.useState('')
  const [option4, setOption4] = React.useState('')
  
  

  const navigate=useNavigate()
 

  const PreviousPage= (event) =>{
      if(currentPage>1){
        setCurrentPage(currentPage-1);
      }
  }

  const NextPage = (event) =>{
    if(currentPage < currentPage+1){
      setCurrentPage(currentPage+1);
    }
  }

  const handleChangeQuestion = (event) => {
    if(event.target.checked) {
      console.log("checkbox is clicked");
      const newList=list.concat(event.target.value);
      setList(newList);
      console.log(newList);
    }
    else{
      const newList1=list.filter(value =>  value !== event.target.value);
      setList(newList1);
      console.log(newList1);
    }
  }

  const handleClickSaveOpen=(event) => {
   
      console.log("save option is clicked");
      axios.post('http://localhost:8082/assessments/v1/assessment', {
        assessment_name: 'assessment1',
        question_id: list,
        created_by: "Saniya",
        last_modified_by: "Vibhuti",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  
  
 
 
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = assessments.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
   const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const [personName, setPersonName] = React.useState([]);
   
    const handleChange = (event) => {
        
      const {
        target: { value },
      } = event;
    
      setPersonName(
        typeof value === 'string' ? value.split(',') : value,
      );
    console.log(event.target.value)
    //console.log("http://localhost:8080/questions/v1/search?topics="+event.target.value)
     //axios.get("http://localhost:8080/questions/v1/").then((result )  =>
     axios.get("http://localhost:8080/questions/v1/search?topics="+event.target.value).then((result )  =>
       {
          setassessments(result.data) 

          
         
        console.log(result.data)
         })
        .catch(err=>{
          console.log(err.message)
        })
       
    
    };
  
    const optionlist=[]
    for(const i in assessments.choices){
      console.log("each =>",  assessments.choices[i])
      optionlist[i]=( assessments.choices[i])
      
    }
    
    console.log(optionlist[0])  
  
   const [openPreview, setOpenPreview] = React.useState(false);
   const handleClickOpen = () => {
    setOpenPreview(true);
    //navigate('/PreviewWindow')
    
      // {list.map(qid => (  
      //  console.log(qid);
      //    axios.get('http://localhost:8080/questions/v1/question/'+qid).then(resp => {

      //   console.log(resp.data);
      //  })

   // ))};
   //setQuestionProps(resp.data);
  //  return (
  //   <div>
  //     <PreviewWindow state={list}/>
  //   </div>

  //  );
 
  }; 
  const [age1, setAge1] = React.useState('');
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const [age2, setAge2] = React.useState('');
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  
  return (
    <>
    {
      openPreview? <PreviewWindow/> :null 
    }
      {

         <div>
       
  <Navbar/>

<div style={{ marginTop:80 }}>
 <AppBar position="static" style={{ background: '#D3D3D3' }}>
        <Toolbar>
            <Stack Stack spacing={65} direction='row'>
                <div>
               <Stack Stack spacing={4} direction='row'>
                <Link to='/adminlogin'>
                  <Button style={{color:'black'}}><ArrowBackIcon /></Button>
                </Link>
                <div className="mx-3">
                  <Box sx={{ minWidth: 200 , maxHeight:47}}>
                    <FormControl sx={{  width: 250 }}>
                      <InputLabel  style={{color:'black'}}>Topic</InputLabel>
                      <Select
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
         
                    >
                      
                {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  
                >
                {name}
                
              </MenuItem >
          ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
        
             
      </Stack>
    </div>
    <div className="container" align='right'>
        {/* <Link to ={{pathname:'/PreviewWindow',state:'hi'}}> */}
        <Button variant="contained" alignItems="right" onClick={handleClickOpen} style={{backgroundColor: "#000000", marginLeft:"190px"}} >
          Preview
        </Button>
        {/* </Link>  */}
        
       
        <Button variant="contained" alignItems="right" onClick={handleClickSaveOpen} style={{backgroundColor: "#000000", marginLeft:"50px"}} >
          Save
        </Button>
    </div>
    </Stack>
  </Toolbar>
  
  </AppBar>
  </div>

{/* ---------------------Box with table, dense padding toggle and prev, next pagination buttons--------------         */} 

    <Box sx={{ width: "95%" ,paddingTop:8,paddingLeft:10}}>
      <Paper sx={{ width: "100%", mb: 2 }}>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
        <TextField
        
        label="Assessment Name :"
       
       
      />
          <TableRow>
            {/* <TableCell></TableCell> */}
            <TableCell>Question</TableCell>
            <TableCell >Option 1</TableCell>
            <TableCell >Option 2</TableCell>
            <TableCell >Option 3</TableCell>
            <TableCell >Option 4</TableCell>
            <TableCell >Answer</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {assessments.map((row) => (
            <TableRow
            key={row.question}
              
            >
             
             
              <TableCell component="th" scope="row" >
              <Checkbox onChange={handleChangeQuestion} value={row.question_id}></Checkbox>
                {row.question}
              </TableCell>
              
              
              <TableCell >{row.choices[0]}</TableCell>
              <TableCell >{row.choices[1]}</TableCell>
              <TableCell >{row.choices[2]}</TableCell>
              <TableCell >{row.choices[3]}</TableCell>
             <TableCell>{row.answer[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        {assessments.length===0 ?
        <div style={{ float: "right" }}>
          <Button onClick={PreviousPage}>Prev</Button>
          Page {totalPages} of {totalPages}
          <Button onClick={NextPage}>Next</Button>
        </div>:
        <div style={{ float: "right" }}>
          <Button onClick={PreviousPage}>Prev</Button>
          Page {currentPage} of {totalPages}
          <Button onClick={NextPage}>Next</Button>
        </div>}
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
 
  </div>
  
}
</>
  );
}

export default AddAssessment;