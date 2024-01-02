function Header() {
    return (
      <header className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-grow">
            <h1 className="text-2xl font-bold tracking-tight text-shadow-md font-robotoCondensed">
              <span className="text-white opacity-75">Welcome to</span>{" "}
              <span className="text-white">MAI&apos;s</span>{" "}
              <span className="text-indigo-400">Digital Universe</span>
            </h1>
            <p className="mt-4 text-m font-medium font-robotoOriginal">
              Where creativity and technology collide.
            </p>
          </div>
          <div className="flex flex-col space-y-2 text-right font-robotoOriginal">
            <a href="mailto:m.ighe@hotmail.com" className="font-semibold text-base">
            📫 m.ighe@hotmail.com
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=16473739841"
              className="font-semibold text-base"
            >
             📞 +1 (647) 373 9841
            </a>
            <span className="font-light text-m"> 📌 #2004-370 Dixon Road, Etobicoke, ON, M9R 1T2, Canada</span>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  