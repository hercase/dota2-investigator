import { QueryClient, QueryClientProvider } from "react-query";
import Search from "./components/Search";
import "./sass/main.scss";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Dota2 Investigator</h1>
        <Search accountId="76797321" />
      </div>
    </QueryClientProvider>
  );
}
