import { UserProfile } from '@clerk/nextjs';

export default function UserProfilePage() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <UserProfile path='/user-profile' routing='path' />
    </main>
  );
}
