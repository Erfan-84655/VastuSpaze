import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="visit our facebook page"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="visit our Twitter page"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="visit our Instagram page"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className="text-sm ">&copy; 2026 VastuSpaze. All rights reserved.</p>
        <a href="https://github.com/Erfan-84655" target="_blank">
          <p className="text-sm ">Created by Erfan Fallah</p>
        </a>
      </div>
    </footer>
  );
}
