import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { Button } from '@mui/material';
import CollapsibleTable from './generalSchedule';
import GeneralSchedule from './generalSchedule';
export default function InputsDate() {
  const [valueStart, setValuStart] = React.useState<Date | null>(
    new Date(),
  );
  const [valueEnd, setValuEnd] = React.useState<Date | null>(
    new Date(),
  );
  const handleChangeS = (newValue: Date | null) => {
    setValuStart(newValue);
  };
  const handleChangeE = (newValue: Date | null) => {
    setValuEnd(newValue);
  };
const [show,setShow]=React.useState(false)
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Date start"
            inputFormat="MM/dd/yyyy"
            value={valueStart}
            onChange={handleChangeS}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Date end"
            inputFormat="MM/dd/yyyy"
            value={valueEnd}
            onChange={handleChangeE}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      <Button onClick={()=>setShow(true)}>שלח</Button>
     {show&&<GeneralSchedule start={valueStart} end={valueEnd}/>} 
      
    </>
  );
}

