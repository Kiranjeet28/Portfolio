import MajorComp from "./InnerComponents/MajorComp"
export default function MajorProject(){
return(


     <div className='flex flex-wrap equal-height '>
     <MajorComp
       img='https://us.123rf.com/450wm/djvstock/djvstock2001/djvstock200143628/138999301-padlock-and-file-design-of-security-lock-access-door-house-safe-safety-and-protection-theme-vector.jpg?ver=6'
       title="File Hiding"
       desc="Java FrontEnd: Swing & AWT Backend: MySQL"
       link="https://github.com/Kiranjeet28/Java-File-Hiding-with-SQL-DB"
     />
     <MajorComp
       img='https://thumbs.dreamstime.com/b/youtube-play-button-vector-illustration-cartoon-youtube-play-button-shadow-background-vector-illustration-cartoon-262961349.jpg'
       title="Youtube Clone"
       desc="React ,Appwrite, MongoDB, NodeJS, Express,Tailwind Css ,OAuth "
       link="https://github.com/Kiranjeet28/Youtube-clone"
     />
     <MajorComp
       img='https://static.vecteezy.com/system/resources/previews/007/343/533/original/yellow-quiz-time-banner-with-comic-style-background-suitable-for-use-for-promotional-designs-vector.jpg'
       title="Quiz Application with Auth "
       desc="Java , Maven plugin , MySQL ,Auth, MicroServices  "
       link="https://github.com/Kiranjeet28/Quiz-application-with-Authentication-"
     />
   </div>
)
}