const Tab = ({
  isActive,
  icon,
  label,
  onClick,
  iconSize = "w-[11px] h-[11px]",
  iconMarginTop = "mt-2", // Add top margin for the icon
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "text-white border-t-2 border-t-white" : "text-gray-600"
      } flex flex-col items-center gap-y-1 px-12 focus:outline-none transition-opacity duration-300 ease-out ${
        isActive ? "opacity-100" : "opacity-75"
      }`}
      aria-selected={isActive}
    >
      {icon && (
        <img
          src={icon}
          alt={`${label} icon`}
          className={`${iconSize} ${iconMarginTop} ${
            isActive ? "brightness-150" : "brightness-50"
          }`}
        />
      )}
      {label}
    </button>
  );
};

export default Tab;
