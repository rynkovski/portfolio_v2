type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        clipRule="evenodd"
      />
    </svg>
  ),
  animated: (props: IconProps) => (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 226.7"
      {...props}
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <polygon points="53.7 204.88 39.26 226.7 260.74 226.7 246.3 204.88 53.7 204.88" />
          <polygon points="150 0 0 226.7 26.17 226.7 150 39.56 273.83 226.7 300 226.7 150 0" />
          <polygon points="205.69 183.05 212.91 193.96 239.08 193.96 150 59.33 60.92 193.96 87.09 193.96 150 98.89 205.69 183.05" />
        </g>
      </g>
    </svg>
  ),
  deersight: (props: IconProps) => (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 255.51 300"
      {...props}
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <path d="M117.55,195.93c3.07.44,6.3,3.38,7.57,6.15,6.85,15.04-6.44,35.79-15.38,47.55-7.33,9.64-16.02,18.25-24.6,26.73,11.44-5.48,23.08-13.59,31.22-23.43,9.63-11.65,21.36-29.92,18.26-45.68-.32-1.65-1.78-3.14-1.21-5.17.59-.64,9.65,2.18,11.13,2.36,1.7.2-.07-2.28-.42-2.67-3.42-3.9-18.17-10.98-23.25-11.53-5.88-.63-14.86-.08-19.64,3.56l.94.22c.22,1.44-.67,2.17-1.98,2.52-14.12,1.16-33.62,10.89-46.63,2.8-6.26-3.89-16.46-17.03-10.94-24.41,1.62-2.16,11.4-6.05,14.44-7.79s6.32-3.97,9.09-6.05c12.88-9.66,21.49-23.48,36.39-30.56.66-11.58-7.36-22.48-15.51-29.96-6.38-5.85-24.38-18.11-32.89-18.21-11.86-.14-23.21.88-34.78,3.54-4.46,1.02-13.55,5.86-15.39-1.17-.94-3.56,2.73-5.66,5.47-6.86,11.89-5.21,19.81-3.96,31.92-4.98.55-.05,3.46-.25,3.08-1.17-5.79-6.67-14.95-10.82-23.2-13.71-4.48-1.57-16.67-3.77-19.38-6.65-3.99-4.23-1.11-8.58,4.07-9.17,9.7-1.1,26.5,6.47,35.04,11.22,9.76,5.43,18.56,13.08,29.49,16.16-2.4-10.76-10.94-20.58-19.72-26.88-4.17-2.99-14.97-7.69-17.11-11.27-2.56-4.28.88-6.79,5.25-6.19,6.54.89,18.66,8.72,23.98,12.93,13.61,10.75,21.79,25.53,25.85,42.29,1.5,1.36,3.3,2.42,4.98,3.53,1.31.86,6.71,4.36,7.77,4.54s1.15-1.94,1.14-2.56c-.22-9.86-2.89-19.77-7.62-28.35-1.8-3.26-5.8-6.31-3.87-10.21,3.13-6.33,9.97,1.37,12.4,4.52,8.9,11.55,13.54,30.43,14.29,44.85.22,4.24-.59,9.73.01,13.71.2,1.32,4.05,10.02,4.93,10.09,16.16-9.2,26.64-25.75,21.3-44.84-.84-3.01-4.24-8.34-.87-10.81s6.97.29,9.07,3.08c4.23,5.63,5.74,14.76,6.25,21.66.12,1.58-.49,7.9.44,8.57,8.76-1.41,16.78-5.57,18.73-14.91,2.12-10.14.63-24.08-6.17-32.21-2.33-2.79-9.11-7.36-4.81-11.66,4.67-4.66,13.36,4.92,16.11,8.4,8.76,11.1,11.15,23.88,9.28,37.8,11.47-2.12,20.18-6.23,20.84-19.14,1.1-21.75-16.32-34.69-34.24-42.45-4.4-1.9-8.66-2.59-12.87-4.16-7.19-2.68-6.55-10.98.54-11.79,4.03-.46,11.37,1.3,15.43,2.44,23.96,6.74,44.89,28.39,48.64,53.33,5.52-2.27,7.82-10.72,8.06-16.3.52-12.37-8.68-24.57-18.31-31.41-2.84-2.01-11.65-6.03-12.87-8.42-1.86-3.64-.41-7.65,3.95-7.78,11.52-.35,28.4,15.02,34.7,24.02,21.77,31.12,3.82,61.62-27.37,75.13-18.02,7.81-50.37,13.07-62.9,27.95-1.04,1.24-4.27,5.73-4.26,7.11,0,1.57,1.78.85,2.83.44,6.34-2.49,13.99-8.33,20.98-11.2,14.44-5.94,29.99-7.14,45.5-6.53,3.33.63.79,8.96.12,11.44-2.7,9.9-11.39,25.32-19.78,31.32-6.32,4.52-14.9,7.52-22.67,7.85.37,6.32,3.43,12.03,4.6,18.36,11.75,63.58-52.33,119.74-113.65,113.65-10.1-1-9.64-6.02-4.04-12.55,3.87-4.5,9.04-8.52,13.03-12.99,8.79-9.84,19.97-22.83,27.59-33.45,7.15-9.98,17.67-29.89,7.67-40.62-1.29-1.38-3.48-2.16-3.8-4.01,2.45.25,5.44-.34,7.81,0ZM50.64,184.53c8.42-1.17,16.57-6.4,23.57-11.12,11.37-7.65,19.16-17.24,29.63-25.26,7.85-6.01,16.93-9.31,24.36-15.38,8.97-7.32,16.73-17.9,18.44-29.58l-8.32,14.15c-11.44,16.04-25.65,15.14-39.61,25.68-11.57,8.73-20.63,20.6-33.01,28.97-2.71,1.84-14.02,7.49-15.14,9-.88,1.19-.1,2.23.08,3.53ZM197.75,125.9c-16.14,1.28-29.16,8.9-42.15,17.7-2.88,1.95-6.51,3.09-8.48,6.42,1.9.22,3.34-.14,5.05-.86,11.34-4.76,21.82-12.01,33.11-17.05,3.28-1.46,7.66-2.39,10.6-4.06.83-.47,2.01-1,1.86-2.15ZM206.99,132.12c-3.71-.52-24.43,15.71-29.74,18.47-4.21,2.19-8.28,2.45-12.14,4.89,1.25,1.66,3.94,1.97,5.91,2.12,14.06,1.1,30.75-8.55,35.8-21.91.44-1.16,1.51-2.74.17-3.57ZM114.85,153.95c-8.7.83-12.46,12.39-2.86,13.95,11.35,1.84,16.11-15.22,2.86-13.95Z" />
      </g>
    </svg>
  ),
};
