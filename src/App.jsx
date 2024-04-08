import { Test } from "./Test";
import "./app.scss"
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
  <div>
    <section>
    <Navbar></Navbar>

    </section>
    {/* <Test/>
    <Test/> */}
    <section>Hero</section>
    <section>Services</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolioi3</section>
  </div>
  );
};

export default App;
