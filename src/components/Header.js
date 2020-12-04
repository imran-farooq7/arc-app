import React from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import { useScrollTrigger } from '@material-ui/core';

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
const Header = (props) => {
    return (
        <div>
            <ElevationScroll>
            <AppBar>
                <Toolbar>
                    Arc dev
                </Toolbar>
            </AppBar>
            </ElevationScroll>
        </div>
    )
}

export default Header
