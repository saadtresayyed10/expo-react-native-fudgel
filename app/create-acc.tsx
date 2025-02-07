import CreateAccScreen from "./(screen)/CreateAccScreen";

export const formElements = [
  {
    label: "Name",
    placeholder: "Saad Sayyed",
  },
  {
    label: "Email",
    placeholder: "saad@gmail.com",
  },
  {
    label: "Password",
    placeholder: "*****************",
  },
  {
    label: "Confirm Password",
    placeholder: "*****************",
  },
];

const CreateAccount = () => {
  return <CreateAccScreen />;
};

export default CreateAccount;
