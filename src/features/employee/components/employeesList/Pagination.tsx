type Props = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  
    return (
      <div className="mt-4 flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  