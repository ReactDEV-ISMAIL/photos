import LoginForm from "components/LoginForm";
import Slider from "components/Slider";
import { Container } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <LoginForm />
      <Slider />
    </Container>
  );
};

export default Login;
