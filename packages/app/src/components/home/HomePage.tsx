import { Content, Page } from '@backstage/core-components';
import { HomePageCompanyLogo } from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import LogoFull from '../Root/LogoFull';

const useStyles = makeStyles(theme => ({
    searchBar: {
      display: 'flex',
      maxWidth: '60vw',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      padding: '8px 0',
      borderRadius: '50px',
      margin: 'auto',
    },
  }));
  
  const useLogoStyles = makeStyles(theme => ({
    container: {
      margin: theme.spacing(5, 0),
    }
  }));

export const HomePage = () => {
  const classes = useStyles();
  const { container } = useLogoStyles();

  return (
    <div style={{
        marginTop: '200px'
    }}>
        <SearchContextProvider>
        <Page themeId="home">
            <Content>
            <Grid container justifyContent="center" spacing={6}>
                <HomePageCompanyLogo
                className={container}
                logo={<LogoFull height={100} />}
                />
                <Grid container item xs={12} alignItems="center" direction="row">
                <HomePageSearchBar
                    classes={{ root: classes.searchBar }}
                    placeholder="Search"
                />
                </Grid>
            </Grid>
            </Content>
        </Page>
        </SearchContextProvider>
    </div>
  );
};
