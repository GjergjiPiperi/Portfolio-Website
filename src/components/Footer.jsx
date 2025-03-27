function Footer() {
  return (
    <footer className="py-8 mt-12 bg-zinc-900 text-zinc-400">
      <div className="container flex flex-col items-center gap-4 mx-auto text-center">
        <p className="text-lg font-semibold text-zinc-200">Gjergji Piperi</p>
        <p className="max-w-[45ch] text-sm">
          Passionate React developer, always learning and building. Let's
          connect and create something amazing together!
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/GjergjiPiperi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gjergji-piperi-3a65ba220/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:gjergjipiperi20@gmail.com"
            className="transition hover:text-zinc-200"
          >
            Email
          </a>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Gjergji Piperi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
