import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUsers } from "../store/slices/userSlice";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUsers({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form title={"Зарегистрироваться"} handleClick={handleRegister} />
    </div>
  );
};

export default SignUp;
