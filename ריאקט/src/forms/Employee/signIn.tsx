import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import employee from "../../classes/employee";
import axios from "axios";
import { useForm } from 'react-hook-form';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'EasyShift © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn(): JSX.Element {
    
    const [employ, setEmploy] = React.useState<employee>({} as employee)

    const onChange = (key: string, value: string | number) => setEmploy(x => ({ ...x, [key]: value }))

    const url = "https://localhost:44336/";
    let navigate = useNavigate()
    const [result1, setResult1] = React.useState();
    const [result2, setResult2] = React.useState();

   
    const checkUser = () => {
      
        const data = employ;
        let employeePer = axios.get(url + `api/Employee/GoToGetEmployeeJobByIdStr?pass=${data.employee_id_str}`)
        .then(r => {localStorage.setItem("JobId", r.data) ;localStorage.setItem("empId",JSON.stringify(data.employee_id))});
        let employeePromise = axios.get(url + `api/Employee/GetemployeeByPassAndId?id=${data.employee_id_str}&pass=${data.employee_id}`)
            .then(a => {
                if (a.status === 200) {
                    swal("OK!", "you connect succesfuly!");
                    navigate('/EmployeeMenu');
                }
            }
            );
    }
    return (
       
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        value={employ.employee_id || ""}
                        onChange={(e) => onChange('employee_id', e.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        type="text" placeholder="סיסמא"
                    />
                    <TextField
                        value={employ.employee_id_str || ""}
                        onChange={(e) => onChange('employee_id_str', e.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        type="text" placeholder="תעודת זהות"
                    
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        
                        onClick={() => { checkUser() }}
                    >
                        Sign in
                    </Button>

                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        
    );
}