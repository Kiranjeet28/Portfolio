
import { useNavigate } from 'react-router-dom';
export default function MajorComp({ id, img, title, tech}) {
    const navigate = useNavigate();
    function onClickPushRoute(id) {
        navigate(`/Portfolio/MajorProject/${id}`);
    }
    return (
        <div className='p-0 m-auto mt-6'
        data-aos='fade-up' data-aos-duration='500'>
                <div className=' w-72   bg-white  dark:hover:bg-gray-800  dark:bg-gray-900 dark:text-gray-100 shadow-black  rounded-lg hover:bg-gray-300  '>
                    <section className=' '>

                        <img src={img}
                            className='h-32 w-72 rounded-t-lg'
                            alt="" />
                    </section >
                    <section
                        className='p-4 text-start '>
                        <div className='m-0 font-bold text-lg'>{title}</div>
                        <p className='text-sm'>{tech}</p>
                    </section>
                    <a className='grid self-center '>
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            onClick={() => { onClickPushRoute(id) }}>
                            More...
                        </button>
                    </a>

                </div>
        </div>
    )
}