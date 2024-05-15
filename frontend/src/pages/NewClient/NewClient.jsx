import AllClientsButtonButton from "../../components/AllClientsButton/AllClientsButton";
import FormComponent from "../../components/FormComponent/FormComponent";

const NewClient = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen flex  flex-col justify-center items-center">
        <h1 className="text-6xl">Event Register</h1>
        <span className="text-xl">Register people to THE EVENT</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FormComponent></FormComponent>
        <div className="flex justify-center mt-10"></div>
        <AllClientsButtonButton>See All Clients</AllClientsButtonButton>
      </div>
    </div>
  );
};

export default NewClient;
