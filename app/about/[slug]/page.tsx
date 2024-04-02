export default function AboutPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>about</h1>
      <h1>{slug}</h1>
    </div>
  );
}
