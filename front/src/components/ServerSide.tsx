export default async function ServerSide() {
  const message1 = await fetch('http://127.0.0.1:4010/serverSideMessage', {
    next: { revalidate: 10 },
  }).then((res) => res.json());
  console.log(message1);
  const message2 = await fetch('http://127.0.0.1:4010/serverSideMessage', {
    next: { revalidate: 1000 },
  }).then((res) => res.json());
  console.log(message2);
  return (
    <>
      <p>message1:{message1.message}</p>
      <p>message2:{message2.message}</p>
    </>
  );
}
