import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import medium from '../assets/medium.svg';

const linkedinURL = 'https://linkedin.com/ditkin';
const githubURL = 'https://github.com/ditkin';
const twitterURL = 'twitter.com/david_itkin';
const mediumURL = 'medium.com/ditkin';

export default function Footer() {
  return (
    <div class="fixed bottom-0 left-0 w-full text-center border-t border-black p-4 h-20 bg-slate-300 flex align-middle space-around">
      <a href={linkedinURL} target="_blank">
        <img class="w-4 h-4" src={linkedin} /> ditkin
      </a>
      <a href={githubURL} target="_blank">
        <img class="w-4 h-4" src={github} /> ditkin
      </a>
      <a href={twitterURL} target="_blank">
        <img class="w-4 h-4" src={twitter} /> david_itkin
      </a>
      <a href={mediumURL} target="_blank">
        <img class="w-4 h-4" src={medium} /> ditkin
      </a>
    </div>
  );
}
