interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Project Details</h1>
      <p>Placeholder for project {params.id} details.</p>
    </main>
  );
}