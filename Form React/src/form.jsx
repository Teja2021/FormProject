import Footer from "./footer";
import Navbar from "./navbar";
import Regform from "./regform";

function Form() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Regform />
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Form;
