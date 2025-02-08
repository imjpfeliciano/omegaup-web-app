interface ChipProps {
  children: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({ children }) => (
  <div className="bg-gray-200 rounded-full text-slate-700 px-4 py-1">
    {children}
  </div>
);

export default Chip;
