import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

export function MyFiltersLink() {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => navigate(ROUTES.filters)}>
        <ListItemIcon>
          <FormatListNumberedIcon />
        </ListItemIcon>
        <ListItemText>Мои фильтры</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
