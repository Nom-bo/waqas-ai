import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <Image className="w-24 h-24 rounded-full mx-auto" src="/noman.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “I am Noman Aslam, student of Generative AI from Rahim Yar Khan under the super vision of Sir Sabzal Shaheen and Mian Asif.
              I am working as a freelancer on upwork and fiverr. My core services are lead generation, data entry and wordpress development.
              I am also working as a a marketing admin at Appstac Solutions Lahore.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Noman Aslam
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Freelancer, Upwork and Fiverr
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page