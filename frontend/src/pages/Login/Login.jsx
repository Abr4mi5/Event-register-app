import LoginForm from "../../components/LoginForm/LoginForm";
const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen flex  flex-col justify-center items-center">
        <h1 className="text-6xl">Event Register</h1>
        <span className="text-xl">Register people to THE EVENT</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
