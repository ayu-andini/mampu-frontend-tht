import { User } from "@/lib/user-types";

interface UserDetailCardProps {
    user: User;
}

export default function UserDetailCard({
    user,
}: UserDetailCardProps) {
    return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
            <h1 className="text-3xl font-bold">
            {user.name}
            </h1>
            <p className="mt-1 text-gray-500">
            @{user.username}
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
            <section>
                <h2 className="mb-3 text-lg font-semibold">
                    Contact Information
                </h2>

                <div className="space-y-2 text-sm">
                    <p>
                    <span className="font-medium">Email:</span>{" "}
                    {user.email}
                    </p>
                    <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {user.phone}
                    </p>
                    <p>
                    <span className="font-medium">Website:</span>{" "}
                    <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline" >
                        {user.website}
                    </a>
                    </p>
                </div>
            </section>

            <section>
                <h2 className="mb-3 text-lg font-semibold">
                    Company
                </h2>
                <div className="space-y-2 text-sm">
                    <p>
                    <span className="font-medium">Name:</span>{" "}
                    {user.company.name}
                    </p>
                    <p>
                    <span className="font-medium">
                        Catchphrase:
                    </span>{" "}
                    {user.company.catchPhrase}
                    </p>
                </div>
            </section>

            <section>
                <h2 className="mb-3 text-lg font-semibold">
                Address
                </h2>

                <div className="text-sm text-gray-700">
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>
                    {user.address.city},{" "}
                    {user.address.zipcode}
                </p>
                </div>
            </section>
        </div>
        </div>
    );
}