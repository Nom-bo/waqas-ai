import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="bg-cyan-100 rounded-xl p-8 dark:bg-slate-800">
        <Image className="w-24 h-24 rounded-full mx-auto" src="/address.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Mian Aslam Home Near Umer Super Store Sakhi Sarwar colony Street No 9.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Tehsil & District
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Rahim Yar Khan
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page 