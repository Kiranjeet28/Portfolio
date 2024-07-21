import PropTypes from 'prop-types';
import { LinkPreview } from './link-preview';

export default function ButtonX({ text ,link}) {
    return (
       
        <LinkPreview
        url={link}
         className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
       >
        <a href={link}>
            <button className="p-[3px] relative" >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    {text}
                </div>
            </button>
        </a>
        </LinkPreview>

    );
}

ButtonX.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
