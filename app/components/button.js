export default function Button({btnText, link}) {

  const ariaLabel = `Link to ${btnText}`;

  return (
    <a 
      target="_blank"
      aria-label={ariaLabel}
      href={link} 
      className="text-center 
      px-6 
      py-4
      lg:min-w-40 
      rounded-sm 
      text-md 
      font-normal 
      tracking-wider 
      border-2 
      border-orange-light-theme
      text-orange-light-theme
      hover:bg-orange-light-theme
      bg-transparent 
      hover:text-btn-text
      hover:font-normal
      dark:hover:text-btn-text
      dark:border-orange-theme 
      dark:text-orange-theme 
      dark:hover:bg-orange-theme 
      dark:hover:border-orange-theme">
        {btnText}
    </a>
  )
}