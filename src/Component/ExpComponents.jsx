import Experience from "./InnerComponents/Expericence"; // Corrected the component name
import { Exp } from "../Data";

export default function ExpComponents() {
  return (
    <div className="flex flex-wrap justify-evenly ">
      {Exp.map((item) => (
        <div key={item.id}>
          <Experience
            Companyname={item.Companyname}
            Status = {item.Status}
            imgLink = {item.imgLink}
          />
        </div>
      ))}
    </div>
  );
}
