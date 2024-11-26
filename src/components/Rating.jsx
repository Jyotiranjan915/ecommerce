const Rating = ({ rating, reviewCount }) => {
  const MAX_STARS = 5;

  return (
    <div className="flex items-center text-[5px]">
      {[...Array(MAX_STARS)].map((_, index) => {
        const fill = index + 1 <= rating ? "text-blue-500" : "text-gray-300";

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`w-6 h-6 ${fill}`}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      })}

      <span className="ml-2 text-sm text-gray-600">({reviewCount})</span>
    </div>
  );
};

export default Rating;
