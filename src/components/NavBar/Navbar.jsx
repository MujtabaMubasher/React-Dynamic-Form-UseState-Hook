function Navbar() {
  return (
    <>
        <header>
            <div className="flex justify-between px-20">
                <img className="w-20" src="/Logo.png" alt="" />
                <div>
                    <ul className="flex gap-10 mt-5">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar