// app/dashboard/page.js
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    message: 'Hello, Dashboard!',
  };
}
export default async function LearningPage() {
  const { message } = await getData();
  getData().then((item) => {
    return (
      <div>
        这是learning下的page.tsx
        <h1>{message}</h1>
      </div>
    );
  });
}
