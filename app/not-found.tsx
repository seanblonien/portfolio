import Link from 'next/link';
import { Button } from '@/components/ui/button';

function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>Page Not Found</h1>
      <p className='mt-4 text-lg'>The page you are looking for could not be found.</p>
      <Button
        asChild
        className='mt-6 bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink-10 hover:shadow-neon-pink-lg rounded-xl'
      >
        <Link href='/'>GO HOME</Link>
      </Button>
    </div>
  );
}

export default NotFound;
