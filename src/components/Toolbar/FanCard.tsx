// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Fan } from 'lucide-react';

// interface FanCardProps {
//   fanName: string;
// }

// export function FanCard({ fanName }: FanCardProps) {
//   const [imageError, setImageError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const handleImageLoad = () => {
//     setLoading(false);
//   };

//   const handleImageError = () => {
//     setLoading(false);
//     setImageError(true);
//   };

//   return (
//     <Link
//       to={`/${fanName}`}
//       className="group flex min-w-[200px] flex-col overflow-hidden rounded-lg bg-white/5 p-3 transition-all hover:bg-white/10"
//     >
//       <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-800">
//         {loading && !imageError && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
//           </div>
//         )}
//         {imageError ? (
//           <div className="flex h-full items-center justify-center">
//             <Fan className="h-12 w-12 text-white/50" />
//           </div>
//         ) : (
//           <img
//             src={`/images/${fanName}.png`}
//             alt={fanName}
//             className={`h-full w-full object-cover transition-all duration-300 ${
//               loading ? 'opacity-0' : 'opacity-100'
//             } group-hover:scale-110`}
//             onLoad={handleImageLoad}
//             onError={handleImageError}
//           />
//         )}
//       </div>
//       <p className="mt-2 text-center text-sm font-medium capitalize text-white">
//         {fanName.replace(/-/g, ' ')}
//       </p>
//     </Link>
//   );
// }

// -----------------------------------------------------------------------------------------------------------------



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Fan } from 'lucide-react';

// interface FanCardProps {
//   fanName: string;
// }

// export function FanCard({ fanName }: FanCardProps) {
//   const [imageError, setImageError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const handleImageLoad = () => {
//     setLoading(false);
//   };

//   const handleImageError = () => {
//     setLoading(false);
//     setImageError(true);
//   };

//   return (
//     <Link
//       to={`/${fanName}`}
//       className="group flex flex-col items-center overflow-hidden rounded-lg bg-white/5 p-3 transition-all hover:bg-white/10"
//     >
//       <div className="relative w-40 h-40 overflow-hidden rounded-lg bg-gray-800">
//         {loading && !imageError && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
//           </div>
//         )}
//         {imageError ? (
//           <div className="flex h-full items-center justify-center">
//             <Fan className="h-12 w-12 text-white/50" />
//           </div>
//         ) : (
//           <img
//             src={`/images/${fanName}.png`}
//             alt={fanName}
//             className={`h-full w-full object-cover transition-all duration-300 ${
//               loading ? 'opacity-0' : 'opacity-100'
//             } group-hover:scale-110`}
//             onLoad={handleImageLoad}
//             onError={handleImageError}
//           />
//         )}
//       </div>
//       <p className="mt-2 text-center text-sm font-medium capitalize text-white">
//         {fanName.replace(/-/g, ' ')}
//       </p>
//     </Link>
//   );
// }

// // Usage in your toolbar component
// export function Toolbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleToolbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleToolbar}>Toggle Toolbar</button>
//       {isOpen && (
//         <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex space-x-4 overflow-x-auto">
//           <FanCard fanName="fan-1" />
//           {/* <FanCard fanName="fan-2" />
//           <FanCard fanName="fan-3" /> */}
//           {/* Add more FanCard components as needed */}
//         </div>
//       )}
//     </div>
//   );
// }







//---------------------------------------------------------------------------------------------------------------------



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fan } from 'lucide-react';

interface FanCardProps {
  fanName: string;
}

export function FanCard({ fanName }: FanCardProps) {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setImageError(true);
  };

  return (
    <Link
      to={`/${fanName}`}
      className="group flex flex-col items-center  rounded-lg bg-white/5 p-3 transition-all hover:bg-white/10"
    >
      <div className="relative w-40 h-40 overflow-hidden rounded-lg bg-gray-800">
        {loading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        )}
        {imageError ? (
          <div className="flex h-full items-center justify-center">
            <Fan className="h-12 w-12 text-white/50" />
          </div>
        ) : (
          <img
            src={`/images/${fanName}.png`}
            alt={fanName}
            className={`h-auto w-auto object-cover p-3 transition-all duration-300  ${
              loading ? 'opacity-0' : 'opacity-100'
            } group-hover:scale-110`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </div>
      <p className="mt-2 text-center text-sm font-medium capitalize text-white">
        {fanName.replace(/-/g, ' ')}
      </p>
    </Link>
  );
}

// Usage in your toolbar component
export function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleToolbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleToolbar}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle Toolbar
      </button>
     
    </div>
  );
}