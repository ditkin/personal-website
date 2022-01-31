import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import medium from '../assets/medium.svg';

export default function Footer() {
  return (
    <div class="fixed bottom-0 left-0 w-full text-center border-t border-black p-4 h-20 bg-slate-300 flex align-middle">
      <img class="w-4 h-4" src={linkedin} /> ditkin
      <img class="w-4 h-4" src={github} /> ditkin
      <img class="w-4 h-4" src={twitter} /> david_itkin
      <img class="w-4 h-4" src={medium} />
    </div>
  );
}
