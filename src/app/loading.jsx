export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-pulse space-y-4">
        {/* Skeleton Card */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
          <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        </div>

        {/* Additional Skeleton Elements */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
          <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
