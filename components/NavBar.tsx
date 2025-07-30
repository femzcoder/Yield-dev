import LocaleSwitcher from "./LocaleSwitcher";

export default function NavBar() {
  return (
    <div className='flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800'>
      <h1 className='text-2xl font-bold'>Staging App</h1>
      <LocaleSwitcher />
    </div>
  );
}