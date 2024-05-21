import { useState } from 'react';
import React from 'react'

import { Box, Typography,Button } from '@mui/material';

const Selection = () => 
{
  const [selectedButtons, setSelectedButtons] = useState([]);
  
  const handleButtonClick = (button) => {
    if (button === 'Any' || button === 'More') {
      setSelectedButtons([button]);
      if(button==='More'){
        // add more options to the display
      }
    } 
    else {
      setSelectedButtons((prevSelectedButtons) => {
        if (prevSelectedButtons.includes(button)) {
          return prevSelectedButtons.filter((item) => item !== button);
        } else {
          return [...prevSelectedButtons.filter((item) => item !== 'Any' && item !== 'More'), button];
        }
      });
    }
    console.log(selectedButtons);
  };

  const isButtonSelected = (button) => selectedButtons.includes(button);

  return  (
  <Box
      weight={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}>
  <Box>
    <Button
      variant={isButtonSelected('Any') ? 'contained' : 'outlined'}
      onClick={() => handleButtonClick('Any')}
    >
      Any
    </Button>
    <Button
      variant={isButtonSelected('American') ? 'contained' : 'outlined'}
      onClick={() => handleButtonClick('American')}
    >
      American
    </Button>
    <Button
      variant={isButtonSelected('Chinese') ? 'contained' : 'outlined'}
      onClick={() => handleButtonClick('Chinese')}
    >
      Chinese
    </Button>
    <Button
      variant={isButtonSelected('Mexican') ? 'contained' : 'outlined'}
      onClick={() => handleButtonClick('Mexican')}
    >
      Mexican
    </Button>
    <Button
      onClick={() => handleButtonClick('More')}
    >
      More
    </Button>
  </Box>
</Box>
);
};

export default Selection;