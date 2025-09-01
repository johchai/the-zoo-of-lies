interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: {
    left?: string;
    right?: string;
  };
}

const baseClass =
  "bg-secondary flex flex-row gap-2.5 items-center cursor-pointer text-primary shadow-primary border-primary w-fit border-2 px-6 py-3 font-semibold shadow-[6px_6px_0px_0px] transition-all duration-150 ease-in-out hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-[0px_0px_0px_0px]";

export const Button = ({ label, href, onClick, icon }: ButtonProps) => {
  if (href) {
    return (
      <a className={baseClass} href={href} target="_blank" rel="noreferrer">
        {icon?.left && (
          <span>
            <img class="size-5" src={icon.left} />
          </span>
        )}
        <span>{label}</span>
        {icon?.right && (
          <span>
            <img class="size-5" src={icon.right} />
          </span>
        )}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {icon?.left && (
        <span>
          <img class="size-5" src={icon.left} />
        </span>
      )}
      <span>{label}</span>
      {icon?.right && (
        <span>
          <img class="size-5" src={icon.right} />
        </span>
      )}
    </button>
  );
};
