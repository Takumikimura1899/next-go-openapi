'use client';
import { components } from '@/generated';
import { useState } from 'react';

export default function Client() {
  const [message, setMessage] = useState<string>('');

  const fetchHello = async () => {
    try {
      const res = await fetch('http://localhost:4010/hello');
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
      const res = await fetch('http://localhost:4010/goodbye');
      const data: components['schemas']['goodbye'] = await res.json();
      if (data.message) {
        setMessage(data.message);
      }
    } catch (err) {
      console.error('Error fetching goodbye:', err);
    }
  };

  return (
    <div>
      <button onClick={fetchHello}>Hello</button>
      <button onClick={fetchGoodbye}>Goodbye</button>
      <p>{message}</p>
    </div>
  );
}
