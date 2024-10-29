'use client';

export default function DocumentosLayout({ children }) {
  return (
    <div>
      <div className="space-y-4 text-custom-gray  ">
        {children} 
      </div>
    </div>
  );
}
