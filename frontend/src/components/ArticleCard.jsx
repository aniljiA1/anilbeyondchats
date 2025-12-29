export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800">{article.title}</h2>

      {/* Original */}
      <details className="group">
        <summary className="cursor-pointer font-medium text-blue-600">
          Original Article
        </summary>
        <p className="mt-2 text-gray-700 whitespace-pre-line text-sm">
          {article.content}
        </p>
      </details>

      {/* Enhanced */}
      {article.enhancedContent && (
        <details className="group">
          <summary className="cursor-pointer font-medium text-green-600">
            Enhanced Article
          </summary>
          <p className="mt-2 text-gray-700 whitespace-pre-line text-sm">
            {article.enhancedContent}
          </p>

          {/* References */}
          <div className="mt-4">
            <p className="font-medium text-sm text-gray-800">References:</p>
            <ul className="list-disc ml-5 text-sm text-blue-600 space-y-1">
              {article.references.map((ref, idx) => (
                <li key={idx}>
                  <a
                    href={ref}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {ref}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      )}
    </div>
  );
}
