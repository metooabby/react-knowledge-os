import { userResource } from "../../services/userResource";

export default function UserProfile() {
  const user = userResource.read();

  return (
    <div className="rounded bg-white p-6 shadow-sm dark:bg-gray-800">
      <h3 className="mb-2 text-lg font-medium">User Profile</h3>
      <p>
        Welcome, <span className="font-semibold">{user.name}</span>
      </p>
    </div>
  );
}
