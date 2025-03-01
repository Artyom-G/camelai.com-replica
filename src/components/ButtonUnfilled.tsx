"use client";

export default function ButtonUnfilled({ children }: { children: React.ReactNode }) {
    return (
      <button
        className="secondary-button text-white border-2 border-white/40 w-[160px] h-[45px] flex justify-around items-center 
                   text-[18px] font-[var(--fw-button)] rounded-[20px] 
                   transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] 
                   relative overflow-hidden z-10 transform hover:translate-y-[-1px] cursor-pointer"
      >
        {children}
        <img className="button-icon h-[14px] ml-[9px] filter invert" src="https://camelai.com/assets/images/chevron-right-black.png" />
      </button>
    );
  }