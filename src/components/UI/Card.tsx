interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full h-full">
      {children}
    </div>
  );
};

export default Card;
