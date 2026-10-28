type IconProps = {
  className?: string;
  size?: number;
};

export function ArrowUpRight({ className, size = 16 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className, size = 16 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2.5 8h11M9.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="m3.5 9.5 3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M3 7h16M3 15h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M5 5l12 12M17 5 5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
    >
      <rect
        x="2"
        y="4"
        width="14"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="m3 5 6 4.5L15 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9 2.5 15 5v4c0 3.4-2.4 5.6-6 6.5-3.6-.9-6-3.1-6-6.5V5l6-2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="m6.2 9 1.9 1.9 3.7-4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
