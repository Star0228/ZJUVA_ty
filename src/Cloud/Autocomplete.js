import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const Appp = [
    {label:"8 Ball Pool"},
    {label:"Adobe Acrobat Reader"},
    {label:"Amazon Shopping"},
    {label:"Angry Birds 2"},
    {label:"Asphalt 8  Airborne"},
    {label:"Dream League Soccer 2018"},
    {label:"Facebook"},
    {label:"Google"},
    {label:"Firefox Browser fast & private"},
    {label:"Gmail"}
  ]  


export default function AUtocomplete({InputValue,setInputvalue}){
    return(
        <>
        <Autocomplete 
        options={Appp} 
        renderInput={(params) => <TextField {...params} label='Apps' />}
        inputValue={InputValue}
        onInputChange={(event, newInputValue) => {
            setInputvalue(newInputValue);
        }}
        />
            <div>{InputValue}</div>
        </>
    );
}