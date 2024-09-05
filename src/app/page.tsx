import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-cyan-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hi Everyone it is my father home and for me It is a space for relaxation, connection, 
          and the creation of memories, making it a central part of your life. It is the place where you start and end your day, 
          a refuge from the outside world.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Mian Aslam Home
        </div>
        <div className="text-slate-700 dark:text-slate-500">
        Peace Begins at home
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page 