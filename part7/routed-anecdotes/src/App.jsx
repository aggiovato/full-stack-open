/***** ROUTER *****/
import CRouter from "./router/CRouter";
/***** COMPONENTS *****/
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full flex justify-between items-center mt-0 mb-4 pl-6">
        <h1 className="mt-3 text-4xl font-bold text-slate-600 select-none">
          Software anecdotes
        </h1>

        <Menu />
      </div>
      <div className="flex-1">
        <CRouter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
