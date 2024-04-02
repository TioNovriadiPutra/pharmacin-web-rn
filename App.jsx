import AppNav from "@navigation/AppNav";
import { queryClient } from "@utils/config/client";
import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilNexus />
        <AppNav />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
