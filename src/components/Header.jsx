import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';


const Header = ({title, subtitle}) => {
    const them = useTheme();
  return (
    <Box>
        <Typography sx={{
            color: them.palette.info.light
        }} mt={"1"} variant="h4">
            {title}
        </Typography>
        <Typography sx={{
            
        }} variant="body2">
            {subtitle}
        </Typography>
      </Box>
  )
}

export default Header