import { useAuthState } from "@/components/context/auth";

export default function Home() {
  const { isAuthenticated, user } = useAuthState();

  console.log(user);

  return (
    <>
      <h1 className="text-green-500 text-3xl font-bold underline">
        {isAuthenticated
          ? "Hello Guest"
          : user && user.username
          ? `Hello ${user.username}`
          : "Hello"}
      </h1>
    </>
  );
}
