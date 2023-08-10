import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

const NameOfSelection = ['Category', 'Size', 'Type', 'Ranking']
const NameOfOptions = {
  Category: [
    'BOOKS_AND_REFERENCE',
    'BUSINESS',
    'COMMUNICATION',
    'EDUCATION',
    'ENTERTAINMENT',
    'FAMILY',
    'FINANCE',
    'GAME',
    'HEALTH_AND_FITNESS',
    'MAPS_AND_NAVIGATION',
    'NEWS_AND_MAGAZINES',
    'PERSONALIZATION',
    'PHOTOGRAPHY',
    'PRODUCTIVITY',
    'SHOPPING',
    'SOCIAL',
    'TOOLS',
    'TRAVEL_AND_LOCAL',
    'VIDEO_PLAYERS',
  ],
  Size: ['<1M', '1M-10M', '10M-50M','50M-100M','Varies with device'],
  Type: ['Free', 'Paid'],
  Ranking: ['Everyone', 'Everyone 10+', 'Teen', 'Mature 17+']
}

function CreateSelectLabels({ value, setValue, NameOfId, Options }) {

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const MenuItems = Options.map((item) => (
    <MenuItem key={NameOfId} value={item}>{item}</MenuItem>
  ))

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={NameOfId}>{NameOfId}</InputLabel>
        <Select
          labelId={NameOfId}
          id={NameOfId}
          multiple
          value={value}
          label={NameOfId}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {MenuItems}
        </Select>
      </FormControl>
    </div>
  );
}


export default function Controller({CategorySelect, setCategorySelect, SizeSelect, setSizeSelect, TypeSelect, setTypeSelect, RankingSelect, setRankingSelect}) {

  return (
    <div>
      <CreateSelectLabels value={CategorySelect} setValue={setCategorySelect} NameOfId={NameOfSelection[0]} Options={NameOfOptions.Category} />
      <CreateSelectLabels value={SizeSelect} setValue={setSizeSelect} NameOfId={NameOfSelection[1]} Options={NameOfOptions.Size} />
      <CreateSelectLabels value={TypeSelect} setValue={setTypeSelect} NameOfId={NameOfSelection[2]} Options={NameOfOptions.Type} />
      <CreateSelectLabels value={RankingSelect} setValue={setRankingSelect} NameOfId={NameOfSelection[3]} Options={NameOfOptions.Ranking} />
    </div>
  );
}
