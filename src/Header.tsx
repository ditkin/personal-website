import funnyKitty from '../assets/funny_kitty.jpeg';

export default function Header() {
  return (
    <div class="w-full py-2 px-2 flex items-center justify-between">
      <span class="w-40 flex justify-around items-center">
        <img class="h-16 w-16 rounded-lg shadow-xl" src={funnyKitty} />
        DAVID ITKIN
      </span>
      <span class="w-40 flex justify-around">
        <span class="cursor-pointer font-medium hover:text-white transition-all ease-in-out">
          ABOUT
        </span>
        <span class="cursor-pointer font-medium hover:text-white transition-all ease-in-out">
          RESUME
        </span>
      </span>
    </div>
  );
}
