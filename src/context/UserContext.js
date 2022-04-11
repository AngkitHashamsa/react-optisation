import {
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = useCallback(
    () => setCounterOne(counterOne + 1),
    [counterOne]
  );

  const incrementTwo = useCallback(
    () => setCounterTwo(counterTwo + 100000000000),
    [counterTwo]
  );

  const handleClick = useCallback(() => console.log("hello"), []);

  const Person = {
    name: "angkit",
    title: "hashamsa",
  };

  const memoizPerson = useMemo(() => Person, []);
  return (
    <UserContext.Provider
      value={{
        counterOne,
        counterTwo,
        incrementOne,
        incrementTwo,
        memoizPerson,
        handleClick,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
