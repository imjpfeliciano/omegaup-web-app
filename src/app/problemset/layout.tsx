const ProblemsetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h1>Problems</h1>

      <section>{children}</section>

      {/* TODO: Implement pagination */}
    </div>
  );
};

export default ProblemsetLayout;
