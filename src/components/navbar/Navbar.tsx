import Link from "next/link"
import Image from "next/image"
import { CustomButton } from ".."
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt="CarHub logo"
            width={118}
            height={18}
            className="object-contain"
          >
          </Image>
        </Link>
        <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles="text-white lg:text-primary-blue bg-primary-blue lg:bg-white rounded-full min-w-[130px] font-semibold"

        />
      </nav>
    </header>
  )
}

export default Navbar