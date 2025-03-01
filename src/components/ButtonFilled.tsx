// ButtonFilled.tsx
export default function ButtonFilled({ children }: { children: React.ReactNode }) {
    return (
      <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
        {children}
      </button>
    );
  }
  