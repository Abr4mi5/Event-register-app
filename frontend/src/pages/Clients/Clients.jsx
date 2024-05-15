import NewClientButton from "../../components/NewClientButton/NewClientButton";
import UserTable from "../../components/UserTable/UserTable";
const Clients = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen flex  flex-col justify-center items-center">
        <h1 className="text-6xl">Event Register</h1>
        <span className="text-xl">Register people to THE EVENT</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center mt-10"></div>
        <div>
          <UserTable></UserTable>
        </div>
        <div className="mt-10">
          <NewClientButton>Register New Client</NewClientButton>
        </div>
      </div>
    </div>
  );
};

export default Clients;
