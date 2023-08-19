import Link from "next/link";

export default function AllBlogs() {
    return (
        <div>
            <div className="mt-[30px]">
                <h1 className="text-lg">All Blogs</h1>
            </div>
            <div className="w-[60%] bg-white p-[20px] mt-[20px] mb-[20px] rounded-md shadow-md">
                <div className="flex">
                    <div className="w-[100px] rounded-md mr-[30px]">
                        <img src="/img/User.jpg"></img>
                    </div>
                    <div>
                        <div>
                            <h1>Introducing Twiter</h1>
                        </div>
                        <div>
                            <span className="text-xs">
                                Elon Musk 
                            </span>
                            <span className="text-sm"> - </span>
                            <span className="text-xs">
                                August 19th, 2023
                            </span>
                        </div>
                    </div>
                </div>
                    <div className="mt-[20px]">
                        <p className="text-sm font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
                    </div>
                    <div className="mt-[15px]">
                        <Link className="text-sm font-medium text-[#9747ff]" href="/blog/elonmusk">See all from the user</Link>
                    </div>
            </div>
            <div className="w-[60%] bg-white p-[20px] mt-[20px] mb-[20px] rounded-md shadow-md">
                <div className="flex">
                    <div className="w-[100px] rounded-md mr-[30px]">
                        <img src="/img/User.jpg"></img>
                    </div>
                    <div>
                        <div>
                            <h1>Introducing AI</h1>
                        </div>
                        <div>
                            <span className="text-xs">
                                Inzamam Malick 
                            </span>
                            <span className="text-sm"> - </span>
                            <span className="text-xs">
                                August 19th, 2023
                            </span>
                        </div>
                    </div>
                </div>
                    <div className="mt-[20px]">
                        <p className="text-sm font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
                    </div>
                    <div className="mt-[15px]">
                        <Link className="text-sm font-medium text-[#9747ff]" href="/blog/inzamammalick">See all from the user</Link>
                    </div>
            </div>
            <div className="w-[60%] bg-white p-[20px] mt-[20px] mb-[20px] rounded-md shadow-md">
                <div className="flex">
                    <div className="w-[100px] rounded-md mr-[30px]">
                        <img src="/img/User.jpg"></img>
                    </div>
                    <div>
                        <div>
                            <h1>Introducing Meta</h1>
                        </div>
                        <div>
                            <span className="text-xs">
                                Mark Zuckerberg 
                            </span>
                            <span className="text-sm"> - </span>
                            <span className="text-xs">
                                August 19th, 2023
                            </span>
                        </div>
                    </div>
                </div>
                    <div className="mt-[20px]">
                        <p className="text-sm font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
                    </div>
                    <div className="mt-[15px]">
                        <Link className="text-sm font-medium text-[#9747ff]" href="/blog/markzuckerberg">See all from the user</Link>
                    </div>
            </div>
        </div>
    )
}