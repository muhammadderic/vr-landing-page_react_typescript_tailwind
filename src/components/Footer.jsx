import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 py-10 px-4 border-t border-neutral-700 md:px-12">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="mb-4 font-semibold text-md">Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index} className="px-4 py-2 text-sm hover:bg-neutral-800">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-md">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index} className="px-4 py-2 text-sm hover:bg-neutral-800">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-md">Community</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li key={index} className="px-4 py-2 text-sm hover:bg-neutral-800">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;