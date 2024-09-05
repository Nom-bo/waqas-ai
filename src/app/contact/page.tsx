import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/contact.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Communication is the bridge between confusion and clarity. — Nat Turner. So feel free to contact if you have any query. we will reach you as soon as possible.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Noman Aslam
            </div>
            <div className="text-sky-500 dark:text-sky-400">
              Phone No
            </div>
            <div className="text-sky-500 dark:text-slate-500">
              +92307430150
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page