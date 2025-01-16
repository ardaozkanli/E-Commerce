import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
function App() {
  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
    </>
  );
}

export default App;
