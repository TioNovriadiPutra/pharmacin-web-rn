import { LocalizationProvider } from "@mui/x-date-pickers";
import AppNav from "@navigation/AppNav";
import { queryClient } from "@utils/config/client";
import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilNexus />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <AppNav />
        </LocalizationProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
