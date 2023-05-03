import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export const AppLayout = ({ children }) => {
  const { user } = useUser();

  return (
    <div className="grid h-screen max-h-screen grid-cols-[300px_1fr]">
      <div className="flex flex-col overflow-hidden text-white">
        <div className="bg-slate-800">
          <div>logo</div>
          <div>cta button</div>
          <div>tokens</div>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
          list of posts
        </div>
        <div className="flex h-20 items-center gap-2 border-t border-t-black/50 bg-cyan-800 px-2">
          {!!user ? (
            <>
              <div className="min-w-[50px]">
                <Image
                  src={user.picture}
                  alt={user.name}
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="font-bold">{user.email}</div>
                <Link className="text-sm" href="/api/auth/logout">
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};
