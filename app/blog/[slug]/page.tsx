export default function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>blog</h1>
      <h1>{slug}</h1>
    </div>
  );
}
