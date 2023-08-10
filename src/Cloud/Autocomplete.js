import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const Apps = [
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

export default function AUtocomplete({Item,setItem}){
    return(     
        <Autocomplete 
        options={Apps} 
        renderInput={(params) => <TextField {...params} label='Apps' />}
        inputValue={Item}
        onInputChange={(event, newInputValue) => {
            setItem(newInputValue);
        }}
        />
    );
}