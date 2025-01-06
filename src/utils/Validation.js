export const Validation = (email, password, name) => {
  const isEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(password);

  const isNameValid = /^[A-Za-z\s]+$/.test(name);
  if (!isEmailVaild) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
