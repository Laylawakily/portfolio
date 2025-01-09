export default function TabButton({active,selcteTab,chilren}) {
  const buttonClass = active 
  ? "text-white border-b border-purple-500" 
  : "text-purple-300"
  return (
       <button onClick={selcteTab}>
        <p className={`font-semibold hover:text-white cursor-pointer${buttonClass}`}>
       {chilren}
       </p>
       </button>
  )
}
