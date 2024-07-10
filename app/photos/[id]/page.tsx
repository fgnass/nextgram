export const dynamicParams = true;
export const dynamic = "error";
export const revalidate = 60;

export function generateStaticParams() {
  let slugs = ['1', '2', '3'];
  return slugs.map((slug) => ({ id: slug }));
}

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className="card">{id}</div>;
}
