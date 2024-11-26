interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 51;
      break;
    case "medium": // Default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }

  return (
    <div>
      <svg
        width={sizeLogo}
        height="100%"
        viewBox="0 0 260 264"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="124.869"
          cy="124.869"
          r="120.521"
          fill="#EED7CD"
          stroke="url(#paint0_linear_51_147)"
          strokeWidth="7.30433"
        />
        <rect
          x="73.7391"
          y="48.1739"
          width="40.1738"
          height="157.043"
          stroke="url(#paint1_linear_51_147)"
          strokeWidth="7.30433"
        />
        <path
          d="M113.91 8L113.91 263.652"
          stroke="url(#paint2_linear_51_147)"
          strokeWidth="7.30433"
        />
        <mask id="path-4-inside-1_51_147" fill="white">
          <path d="M133.998 44.5217C147.074 44.5217 159.615 48.7543 168.861 56.2884C178.107 63.8224 183.302 74.0408 183.302 84.6955C183.302 95.3503 178.107 105.569 168.861 113.103C159.615 120.637 147.074 124.869 133.998 124.869L133.998 84.6955L133.998 44.5217Z" />
        </mask>
        <path
          d="M133.998 44.5217C147.074 44.5217 159.615 48.7543 168.861 56.2884C178.107 63.8224 183.302 74.0408 183.302 84.6955C183.302 95.3503 178.107 105.569 168.861 113.103C159.615 120.637 147.074 124.869 133.998 124.869L133.998 84.6955L133.998 44.5217Z"
          stroke="url(#paint3_linear_51_147)"
          strokeWidth="7.30433"
          mask="url(#path-4-inside-1_51_147)"
        />
        <mask id="path-5-inside-2_51_147" fill="white">
          <path d="M132.172 44.5217C144.763 44.5217 156.84 48.7543 165.744 56.2884C174.648 63.8224 179.65 74.0408 179.65 84.6955C179.65 95.3503 174.648 105.569 165.744 113.103C156.84 120.637 144.764 124.869 132.172 124.869L132.172 84.6955L132.172 44.5217Z" />
        </mask>
        <path
          d="M132.172 44.5217C144.763 44.5217 156.84 48.7543 165.744 56.2884C174.648 63.8224 179.65 74.0408 179.65 84.6955C179.65 95.3503 174.648 105.569 165.744 113.103C156.84 120.637 144.764 124.869 132.172 124.869L132.172 84.6955L132.172 44.5217Z"
          stroke="url(#paint4_linear_51_147)"
          strokeWidth="7.30433"
          mask="url(#path-5-inside-2_51_147)"
        />
        <mask id="path-6-inside-3_51_147" fill="white">
          <path d="M133.998 128.521C147.074 128.521 159.615 132.754 168.861 140.288C178.107 147.822 183.302 158.041 183.302 168.695C183.302 179.35 178.107 189.568 168.861 197.102C159.615 204.637 147.074 208.869 133.998 208.869L133.998 168.695L133.998 128.521Z" />
        </mask>
        <path
          d="M133.998 128.521C147.074 128.521 159.615 132.754 168.861 140.288C178.107 147.822 183.302 158.041 183.302 168.695C183.302 179.35 178.107 189.568 168.861 197.102C159.615 204.637 147.074 208.869 133.998 208.869L133.998 168.695L133.998 128.521Z"
          stroke="url(#paint5_linear_51_147)"
          strokeWidth="7.30433"
          mask="url(#path-6-inside-3_51_147)"
        />
        <mask id="path-7-inside-4_51_147" fill="white">
          <path d="M132.172 128.521C144.763 128.521 156.84 132.754 165.744 140.288C174.648 147.822 179.65 158.041 179.65 168.695C179.65 179.35 174.648 189.568 165.744 197.102C156.84 204.637 144.764 208.869 132.172 208.869L132.172 168.695L132.172 128.521Z" />
        </mask>
        <path
          d="M132.172 128.521C144.763 128.521 156.84 132.754 165.744 140.288C174.648 147.822 179.65 158.041 179.65 168.695C179.65 179.35 174.648 189.568 165.744 197.102C156.84 204.637 144.764 208.869 132.172 208.869L132.172 168.695L132.172 128.521Z"
          stroke="url(#paint6_linear_51_147)"
          strokeWidth="7.30433"
          mask="url(#path-7-inside-4_51_147)"
        />
        <path
          d="M135.824 8L135.824 263.652"
          stroke="url(#paint7_linear_51_147)"
          strokeWidth="7.30433"
        />
        <line
          x1="92.0008"
          y1="51.8259"
          x2="92.0008"
          y2="201.565"
          stroke="url(#paint8_linear_51_147)"
          strokeWidth="7.30433"
        />
        <path
          d="M212.706 161.208V81.1981C227.095 78.8171 241.778 78.8171 256.167 81.1981V161.208H212.706Z"
          fill="black"
          stroke="black"
          strokeWidth="0.365217"
        />
        <path
          d="M248.861 40.9452V84.5528C239.386 86.8976 229.483 86.8976 220.009 84.5528V19.1392H227.055L248.861 40.9452Z"
          fill="#EED7CD"
          stroke="black"
          strokeWidth="0.365217"
        />
        <path
          d="M209.053 226.947V143.3C225.953 142.101 242.917 142.101 259.818 143.3V226.947H209.053Z"
          fill="black"
          stroke="black"
          strokeWidth="0.365217"
        />
        <path
          d="M212.706 81.2769C226.978 84.8058 241.895 84.8058 256.167 81.2769V146.628C241.778 149.009 227.095 149.009 212.706 146.628V81.2769Z"
          fill="url(#paint9_linear_51_147)"
          stroke="black"
          strokeWidth="0.365217"
        />
        <path
          d="M209.053 143.372C225.649 148.067 243.222 148.067 259.818 143.372V234.276L253.003 235.25C240.687 237.009 228.183 237.009 215.867 235.25L209.053 234.276V143.372Z"
          fill="url(#paint10_linear_51_147)"
          stroke="black"
          strokeWidth="0.365217"
        />
        <g filter="url(#filter0_f_51_147)">
          <path
            d="M241.74 81.0433L245.392 85.152V116.407V146.782L242.471 144.728L241.74 81.0433Z"
            fill="#603D29"
          />
        </g>
        <g filter="url(#filter1_f_51_147)">
          <path
            d="M216.173 150.434L223.477 155.684V195.622V234.434L217.634 231.809L216.173 150.434Z"
            fill="#25221F"
          />
        </g>
        <g filter="url(#filter2_f_51_147)">
          <path
            d="M241.74 146.782L245.392 152.261V193.934V234.434L242.471 231.695L241.74 146.782Z"
            fill="#25221F"
          />
        </g>
        <g filter="url(#filter3_f_51_147)">
          <path
            d="M216.173 81.0433L223.477 85.152V116.407V146.782L217.634 144.728L216.173 81.0433Z"
            fill="#55341F"
          />
        </g>
        <g filter="url(#filter4_f_51_147)">
          <path
            d="M222.564 22.6088L238.086 40.8696L239.912 64.6087L238.086 82.8695L222.564 80.1938V22.6088Z"
            fill="#E9BCA6"
          />
        </g>
        <g filter="url(#filter5_f_51_147)">
          <path
            d="M223.48 26.2608L228.959 31.7391L230.785 53.652L227.133 77.3911H223.48V26.2608Z"
            fill="#E4D0C7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_51_147"
            x="234.436"
            y="73.739"
            width="18.261"
            height="80.3476"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_51_147"
            />
          </filter>
          <filter
            id="filter1_f_51_147"
            x="208.869"
            y="143.13"
            width="21.9133"
            height="98.6085"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_51_147"
            />
          </filter>
          <filter
            id="filter2_f_51_147"
            x="234.436"
            y="139.478"
            width="18.261"
            height="102.261"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_51_147"
            />
          </filter>
          <filter
            id="filter3_f_51_147"
            x="208.869"
            y="73.739"
            width="21.9133"
            height="80.3476"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_51_147"
            />
          </filter>
          <filter
            id="filter4_f_51_147"
            x="215.26"
            y="15.3044"
            width="31.9563"
            height="74.8694"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_51_147"
            />
          </filter>
          <filter
            id="filter5_f_51_147"
            x="216.176"
            y="18.9565"
            width="21.9133"
            height="65.739"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_51_147"
            />
          </filter>
          <linearGradient
            id="paint0_linear_51_147"
            x1="82.8694"
            y1="7.99999"
            x2="208.869"
            y2="205.217"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CB9371" />
            <stop offset="1" stopColor="#532000" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_51_147"
            x1="70.0869"
            y1="44.5217"
            x2="126.293"
            y2="202.601"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CA9270" />
            <stop offset="1" stopColor="#653211" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_51_147"
            x1="113.41"
            y1="8"
            x2="113.41"
            y2="263.652"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CA9370" />
            <stop offset="1" stopColor="#572404" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_51_147"
            x1="133.998"
            y1="44.5217"
            x2="133.998"
            y2="124.869"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A97351" />
            <stop offset="1" stopColor="#8B5635" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_51_147"
            x1="132.172"
            y1="44.5217"
            x2="132.172"
            y2="124.869"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A97351" />
            <stop offset="1" stopColor="#8B5635" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_51_147"
            x1="133.998"
            y1="128.521"
            x2="133.998"
            y2="208.869"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#885332" />
            <stop offset="1" stopColor="#663312" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_51_147"
            x1="132.172"
            y1="128.521"
            x2="132.172"
            y2="208.869"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#885332" />
            <stop offset="1" stopColor="#663312" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_51_147"
            x1="135.324"
            y1="8"
            x2="135.324"
            y2="263.652"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B98260" />
            <stop offset="1" stopColor="#572404" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_51_147"
            x1="87.8486"
            y1="51.8259"
            x2="87.8486"
            y2="201.565"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C78F6D" />
            <stop offset="1" stopColor="#683514" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_51_147"
            x1="212.523"
            y1="113.913"
            x2="256.349"
            y2="113.913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#834E2D" />
            <stop offset="1" stopColor="#B27B59" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_51_147"
            x1="208.87"
            y1="188.782"
            x2="260"
            y2="188.782"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#515152" />
            <stop offset="1" stopColor="#5E5D5E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
