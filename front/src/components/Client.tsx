'use client';
import { components } from '@/generated';
import { useState } from 'react';

export default function Client() {
  const [message, setMessage] = useState<string>('');

  const fetchHello = async () => {
    try {
      const res = await fetch('/api');
      console.log('res:', res);
      const data: components['schemas']['hello'] = await res.json();
      if (data.message) {
        setMessage(data.message);
      }
    } catch (err) {
      console.error('Error fetching hello:', err);
    }
  };

  const fetchGoodbye = async () => {
    try {
      const res = await fetch('http://127.0.0.1:4010/goodbye', {
        next: { revalidate: 10 },
      });
      const data: components['schemas']['goodbye'] = await res.json();
      if (data.message) {
        setMessage(data.message);
      }
    } catch (err) {
      console.error('Error fetching goodbye:', err);
    }
  };

  return (
    <>
      <p className='text-center'>{message}</p>
      <div className='gap-2 mt-4 flex justify-center'>
        <button className='p-2 rounded-md bg-gray-600' onClick={fetchHello}>
          Hello
        </button>
        <button className='p-2 bg-gray-600 rounded-md' onClick={fetchGoodbye}>
          Goodbye
        </button>
      </div>
    </>
  );
}
