export default function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="mb-4">
      <div className="text-sm text-gray-600 mb-1">
        질문 {current} / {total}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
} 