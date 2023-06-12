

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './App.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AmenitiesList({ propertyData }) {

    const combinedAmenities = propertyData
    ? propertyData.reduce((amenities, property) => {
        if (property.fields.amenities) {
          return [...amenities, ...property.fields.amenities];
        }
        return amenities;
      }, [])
    : [];

  const uniqueAmenities = [...new Set(combinedAmenities)];

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {uniqueAmenities.map((amenity) => (
        <Grid item xs={4} key={amenity}>
          <li>{amenity}</li>
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}
