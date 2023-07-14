import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import OverlayLoader from '../OverlayLoader';
import { useAppContext } from '../../AppContext';

import { usePageContext, SidebarItem, HeaderItem } from '../Layout';


function NavMenu() {
  const { navMenu, toggleSidebar, screenType } = usePageContext();
  const {state: appState } = useAppContext();
  const [loading] = React.useState(false);
  React.useEffect(() => {
    navMenu.setHeaderCenter(
      <>
        {screenType !== 'desktop' && (
          <HeaderItem padded={false}>
            <IconButton
              color="inherit"
              onClick={() => toggleSidebar()}
            ><MenuIcon /></IconButton>
          </HeaderItem>
        )}
        <Typography variant="subtitle1">EHR PATIENT MANAGEMENT</Typography>
      </>
    );

    navMenu.setSidebarCenter(
      <>
      <br/>
        <SidebarItem padded={false}>
          <MenuItem
            component={Link}
            to="/patients"
            selected={appState.navSection === 'patients'}
          >
            <Typography noWrap>Patients</Typography>
          </MenuItem>
        </SidebarItem>
        <br/>
      </>
    );

    return () => {
      navMenu.setInfoBar(null);
      navMenu.setHeaderCenter(null);
      navMenu.setHeaderRight(null);
    };
  }, []);

  return (
    <>
      {loading && <OverlayLoader />}
    </>
  );
}

export default NavMenu;
