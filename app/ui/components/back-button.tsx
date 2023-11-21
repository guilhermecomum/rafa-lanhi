import { Link } from "@remix-run/react";

type Props = {
  to?: string;
};

function BackButton({ to }: Props) {
  return (
    <div className="mt-4 flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>

      <Link to={to} className="ml-2">
        voltar
      </Link>
    </div>
  );
}
export { BackButton };
