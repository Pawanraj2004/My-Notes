import { Link } from "react-router";
import { PlusIcon,Github,Palette} from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">My-Notes</h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
            <a 
            href="https://github.com/Pawanraj2004/My-Notes" 
            className="btn btn-primary btn-link" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <Github className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
