// import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

export default function Blog () {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const onPublishHandler = async () => {
    const res = await fetch("/data/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc
      }),
    });

    console.log(res);
  }

  return (
            <div className=" w-full px-[60px] mt-12 ">
                <div className=" w-[80%] p-[30px] bg-white rounded-md shadow-md">
                <div className="w-full mb-[20px]">
                    <input type="text" name='title' onChange={(e) => {setTitle(e.target.value)}}
                        className="w-full pt-[4px] pb-[4px] pl-[10px] pr-[10px] rounded-md ring-1 ring-inset ring-[#9747ff]"
                        placeholder="Title"
                    />
                </div>
                <div className="w-full mb-[15px] ">
                    <textarea rows="5" name="desc" id="desc" onChange={(e) => {setDesc(e.target.value)}}
                        className="border w-full rounded-md pt-[8px] pb-[4px] pl-[10px] pr-[10px] " 
                        placeholder="What is your in mind">

                    </textarea>
                </div>
                <div>
                    <button onClick={onPublishHandler} type='submit' className="bg-[#9747ff] p-2 rounded-md text-white">
                        Publish Blog
                    </button>
                </div>
                </div>
            </div> 
            )
}


