 import { Stack } from "expo-router";


 const Layout = ({ children }:{children:any}) => {
    return (
      <Stack>
         {children}
      </Stack>
    );
     }
    export default Layout;