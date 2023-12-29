import Client from '@/components/Client';
import ServerSide from '@/components/ServerSide';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <div className=' bg-zinc-300'>
        <h1 className='text-4xl text-center'>Server Side Rendering</h1>
        <ServerSide />
        <div className='bg-zinc-200'>
          <h1 className='text-4xl text-center'>Client Side Rendering</h1>
          <Client />
        </div>
      </div>
    </main>
  );
}
