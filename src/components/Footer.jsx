const Footer = () => {
  return (
    <footer className="text-white text-xl pt-24">
        <div className="bg-[#31363F] md:flex md:justify-between md:items-center p-5 grid place-items-center gap-5">

            <div className="grid place-items-center gap-1">
                <a href="https://sairam.edu.in/">
                    <img src="https://www.innovatia23.tech/sec-logo-white.png" className="w-30 h-20 rounded-xl"/>
                </a>
                <p className="text-center">Sai Leo Nagar, West Tambaram, Chennai - 600044</p>
            </div>

            <div className="grid place-items-center gap-1">
                <p className="text-center">Get connected with us through</p>
                <div className="flex space-x-2">
                    <a href="https://www.instagram.com/mtechcsesairam/" className="hover:scale-125 active:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" color="white">
                            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/SairamEnggMtechCSE/" className="hover:scale-125 active:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="text-white">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                        </svg>
                    </a>
                    <a href="https://in.linkedin.com/in/sairam-m-tech-cse-794733229" className="hover:scale-125 active:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="text-white">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <p className="font-extralight text-lg bg-[#31363F] p-2 pt-10 text-center">Copyrights © 2024. All rights reserved.</p>
    </footer>
  )
}

export default Footer