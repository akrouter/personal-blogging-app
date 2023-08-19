import Link from "next/link";

export default function MarkZuckerberg () {
    return (
        <div className="w-full h-full bg-gray-100 pt-[30px] pl-[60px]">
            <div className="mb-[25px]">
                <Link className="text-xl font-bold text-[#9747ff]" href="/">{"<"} Back to all blogs </Link>
            </div>
            <div className="mb-[25px]">
                <h1 className="font-bold text-m">All From Mark Zuckerberg </h1>
            </div>
            <div className="flex">
            <div className="w-[60%] bg-white p-[20px] mt-[20px] mb-[20px] rounded-md shadow-md mr-[200px]">
                <div className="flex">
                    <div className="w-[100px] rounded-md mr-[30px]">
                        <img src="/img/User.jpg"></img>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold text-xl">Introducing Meta</h1>
                        </div>
                        <div>
                            <span className="text-xs">
                                Mark Zuckerberg
                            </span>
                            <span> - </span>
                            <span className="text-xs">
                                August 19th, 2023
                            </span>
                        </div>
                    </div>
                </div>
                    <div className="mt-[20px]">
                        <p className="text-sm font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
                    </div>
            </div>
            <div className="mt-[30px]">
                <div className="flex flex-col items-end">
                    <div className="mb-[10px]"> 
                        <h1 className="font-bold text-2xl text-[#9747ff]">Mark Zuckerberg</h1>
                    </div>
                    <div className="w-[200px] border rounded-md p-[5px]"> 
                        <img src="/img/User.jpg"></img>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-[60%] bg-white p-[20px] mt-[20px] mb-[20px] rounded-md shadow-md">
                <div className="flex">
                    <div className="w-[100px] rounded-md mr-[30px]">
                        <img src="/img/User.jpg"></img>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold text-xl">Introducing Facebook</h1>
                        </div>
                        <div>
                            <span className="text-xs">
                                Mark Zuckerberg
                            </span>
                            <span> - </span>
                            <span className="text-xs">
                                August 12th, 2023
                            </span>
                        </div>
                    </div>
                </div>
                    <div className="mt-[20px]">
                        <p className="text-sm font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
                    </div>
            </div>
        </div>
    )
}