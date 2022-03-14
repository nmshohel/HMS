import { Icon } from '@mui/material';
import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Grid from '@mui/material/Grid';


const Sidevar = () => {

    return (
        <>
        <Grid container spacing={2}>

        <Grid item xs={2}>
        <Navigation
              // you can use your own router's api to get pathname
              activeItemId="/management/members"
              onSelect={({itemId}) => {
                // maybe push to the route
                itemId.accessories("/accessories");
                
              }}
              items={[
                {
                  title: 'Dashboard',
                  itemId: '/dashboard',
                  // you can use your own custom Icon component as well
                  // icon is optional
                  elemBefore: () => <Icon name="inbox" />,
                },
                {
                  title: 'Management',
                  itemId: '/management',
                  elemBefore: () => <Icon name="users" />,
                  subNav: [
                    {
                      title: 'Accessories',
                      itemId: '/accessories',
                      to: '/accessories',
                    },
                    {
                      title: 'Members',
                      itemId: '/management/members',
                    },
                  ],
                },
                {
                  title: 'Another Item',
                  itemId: '/another',
                  subNav: [
                    {
                      title: 'Teams',
                      itemId: '/management/teams',

                    },
                  ],
                },
              ]}
            />
          
        </Grid>
        <Grid item xs={10}>
          
        </Grid>
        </Grid>

        </>
      );
};

export default Sidevar;