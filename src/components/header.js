import Btn from "./btn";

export default function Header () {
    return (
    <header>
        <nav className="w-full h-[40px] bg-[#9747ff] text-white px-[60px]">
            <div>
                <div className="flex items-center lg:order-2">
                    <Btn />
                </div>
            </div>
        </nav>
    </header>
    )
}