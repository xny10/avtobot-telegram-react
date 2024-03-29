import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';

type NavLinkProps = {
  url: string;
  icon: ReactNode;
  label: string;
};

export function NavLink({ url, icon, label }: NavLinkProps) {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => startTransition(() => navigate(url))}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
