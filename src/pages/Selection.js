import { useState } from 'react';
import React from 'react'
import { Box,Button, Menu, MenuItem } from '@mui/material';

const Selection = () => 
{
  //List of all the diff cuisins
  const [selectedButtons, setSelectedButtons] = useState([]);

  //for the drop down Menu 
  const [anchorEl, setAnchorEl] = useState(null);
  
  //cuisine type handler
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
  };

  //drop down menu 
  const handleDropDownClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isButtonSelected = (button) => selectedButtons.includes(button);
  const handleSubmission = ()=>{
    //api calls???
  }

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
    <Button
        aria-controls="Price"
        aria-haspopup="true"
        onClick={handleDropDownClick}
      >
        Price
    </Button>
    <Menu
        id="Price"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleDropDownClick}
      >
        <MenuItem onClick={handleClose}>$</MenuItem>
        <MenuItem onClick={handleClose}>$$</MenuItem>
        <MenuItem onClick={handleClose}>$$$</MenuItem>
      </Menu>
  </Box>
  <Box>
    <Button color='inherit' onClick={handleSubmission} >Submit</Button>
  </Box>
</Box>
);
};

export default Selection;