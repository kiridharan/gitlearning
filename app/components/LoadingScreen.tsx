export default function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#1e1e1e]">
      <div className="text-center">
        <svg
          className="w-16 h-16 mx-auto text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 92 92"
          fill="currentColor"
        >
          <defs>
            <clipPath id="loading-clip">
              <rect
                className="animate-git-load"
                x="0"
                y="0"
                width="92"
                height="92"
              >
                <animate
                  attributeName="height"
                  values="0;92"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>
            </clipPath>
          </defs>
          <path
            clipPath="url(#loading-clip)"
            d="M90.156,41.965,50.036,1.844a5.918,5.918,0,0,0-8.372,0L33.892,9.617l10.57,10.57a7.018,7.018,0,0,1,8.9,8.945l10.185,10.185a7.023,7.023,0,1,1-4.217,3.971,6.924,6.924,0,0,1,.7-3.041L50.156,30.374v34.2a7.027,7.027,0,1,1-5.795-.175V30.049a7.029,7.029,0,0,1-3.809-9.22L30.174,10.451,1.844,38.781a5.918,5.918,0,0,0,0,8.372L41.965,87.274a5.918,5.918,0,0,0,8.372,0L90.156,47.455A5.918,5.918,0,0,0,90.156,41.965Z"
          />
        </svg>
        <p className="mt-4 text-gray-400">Loading your progress...</p>
      </div>
    </div>
  );
}
