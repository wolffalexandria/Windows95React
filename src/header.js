import React from 'react';
import {
    AppBar,
    Toolbar,
    TextField,
    Button,
    List,
    ListItem,
    Divider,
    styleReset
} from 'react95';
import theme from 'react95/dist/themes/candy';
import image from './logo.png';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";


const GlobalStyles = createGlobalStyle`
  
  ${styleReset}
`;


export const Default = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <ThemeProvider theme={theme}>
            <AppBar>
                <GlobalStyles />
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Button
                            onClick={() => setOpen(!open)}
                            active={open}
                            style={{ fontWeight: 'bold' }}
                        >
                            <img
                                src={image}
                                alt='react95 logo'
                                style={{ height: '20px', marginRight: 4 }}
                            />
            Start
          </Button>
                        {open && (
                            <List
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '100%'
                                }}
                                onClick={() => setOpen(false)}
                            >
                                <ListItem>
                                    <span role='img' aria-label='👨‍💻'>
                                        👨‍💻
                </span>
                Profile
              </ListItem>
                                <ListItem>
                                    <span role='img' aria-label='📁'>
                                        📁
                </span>
                My account
              </ListItem>
                                <Divider />
                                <ListItem disabled>
                                    <span role='img' aria-label='🔙'>
                                        🔙
                </span>
                Logout
              </ListItem>
                            </List>
                        )}
                    </div>
                    <TextField placeholder='Search...' width={150} />
                </Toolbar>

            </AppBar>
        </ThemeProvider>
    );
};


