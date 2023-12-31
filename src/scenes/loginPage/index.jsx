
import { Box ,Typography,useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";




const LoginPage =()=>{
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

    return (<Box sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(https://res.cloudinary.com/dwpsyo2te/image/upload/v1689142916/SOCIAL-MEDIA/uug1xr9htlcktwyw5dau.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} >
  
    <Box width="100%"  sx={{
      backgroundColor:"transparent",
      backdropFilter: "blur(5px)",
      position: "fixed",
      zIndex: "1",
    }}  p="0.2rem 6%" >
   <Typography fontWeight ="bold" fontSize ="38px" color="primary" align="center" sx={{
    fontFamily: "Dancing Script, cursive",
   }}>Doodle</Typography>
   </Box>

   <Box width={isNonMobileScreen ? "50%":"93%"}
   p="2rem"
   m="8rem auto"
   borderRadius="1.5rem"
   sx={{
      backgroundColor:"transparent",
      backdropFilter: "blur(60px)",
    }} >
    
   <Form />
   </Box>

    </Box>)
   
}

export default LoginPage;