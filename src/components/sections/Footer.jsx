export default function Footer() {
  const date = new Date();
  return (
    <footer className="grid grid-cols-1 gap-3 py-6 h-30 bg-slate-100 dark:bg-slate-800 place-content-end place-items-center">
      <p className="font-bold">Cersar Julian | {date.getFullYear()}</p>
      <div>
        Developed with ❤️ by
        <a href="https://github.com/cesar-js-23" target="_blank">
          {" "}
          Cesar Julian
        </a>
      </div>
    </footer>
  );
}
