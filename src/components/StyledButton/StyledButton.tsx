import { styled } from '@mui/material/styles';
import {type ReactNode } from 'react';

interface StyledButtonProps {
    children: ReactNode
}


const StyledButton: React.FC<StyledButtonProps> =  ({children}) => {
  
  const StyledButton = styled("button")(({theme}) => ({
    backgroundColor: theme.palette.info.main,
    border: `1px solid #e3c87e`,
    borderRadius: "3px",
    padding:"5px 15px",
    width: "100%",
    color: "black",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },

  }))
  return (
    <>
     <StyledButton>
        {children}
     </StyledButton>
    </>
  )
}

export default StyledButton
