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
        <path
          d="M124.869 245.39C191.431 245.39 245.39 191.431 245.39 124.869C245.39 58.3071 191.431 4.34802 124.869 4.34802C58.3071 4.34802 4.34802 58.3071 4.34802 124.869C4.34802 191.431 58.3071 245.39 124.869 245.39Z"
          fill="#EED7CD"
          stroke="url(#paint0_linear_8_2)"
          stroke-width="7.30433"
        />
        <path
          d="M212.706 161.208V81.1981C227.095 78.8171 241.778 78.8171 256.167 81.1981V161.208H212.706Z"
          fill="black"
          stroke="black"
          stroke-width="0.365217"
        />
        <path
          d="M248.861 40.9452V84.5528C239.386 86.8976 229.483 86.8976 220.009 84.5528V19.1392H227.055L248.861 40.9452Z"
          fill="#EED7CD"
          stroke="black"
          stroke-width="0.365217"
        />
        <path
          d="M209.053 226.947V143.3C225.953 142.101 242.917 142.101 259.818 143.3V226.947H209.053Z"
          fill="black"
          stroke="black"
          stroke-width="0.365217"
        />
        <path
          d="M212.706 81.2769C226.978 84.8058 241.895 84.8058 256.167 81.2769V146.628C241.778 149.009 227.095 149.009 212.706 146.628V81.2769Z"
          fill="url(#paint1_linear_8_2)"
          stroke="black"
          stroke-width="0.365217"
        />
        <path
          d="M209.053 143.372C225.649 148.067 243.222 148.067 259.818 143.372V234.276L253.003 235.25C240.687 237.009 228.183 237.009 215.867 235.25L209.053 234.276V143.372Z"
          fill="url(#paint2_linear_8_2)"
          stroke="black"
          stroke-width="0.365217"
        />
        <g filter="url(#filter0_f_8_2)">
          <path
            d="M241.74 81.0433L245.392 85.152V116.407V146.782L242.471 144.728L241.74 81.0433Z"
            fill="#603D29"
          />
        </g>
        <g filter="url(#filter1_f_8_2)">
          <path
            d="M216.173 150.434L223.477 155.684V195.622V234.434L217.634 231.809L216.173 150.434Z"
            fill="#25221F"
          />
        </g>
        <g filter="url(#filter2_f_8_2)">
          <path
            d="M241.74 146.782L245.392 152.261V193.934V234.434L242.471 231.695L241.74 146.782Z"
            fill="#25221F"
          />
        </g>
        <g filter="url(#filter3_f_8_2)">
          <path
            d="M216.173 81.0433L223.477 85.152V116.407V146.782L217.634 144.728L216.173 81.0433Z"
            fill="#55341F"
          />
        </g>
        <g filter="url(#filter4_f_8_2)">
          <path
            d="M222.564 22.6088L238.086 40.8696L239.912 64.6087L238.086 82.8695L222.564 80.1938V22.6088Z"
            fill="#E9BCA6"
          />
        </g>
        <g filter="url(#filter5_f_8_2)">
          <path
            d="M223.48 26.2608L228.959 31.7391L230.785 53.652L227.133 77.3911H223.48V26.2608Z"
            fill="#E4D0C7"
          />
        </g>
        <path
          d="M81.768 78.968C86.0347 78.968 89.2773 79.48 91.496 80.504C93.7147 81.4427 95.6773 82.5093 97.384 83.704C98.408 84.3013 99.2187 84.7707 99.816 85.112C100.499 85.368 101.139 85.496 101.736 85.496C102.589 85.496 103.187 85.0267 103.528 84.088C103.955 83.1493 104.296 81.7413 104.552 79.864H107.496C107.411 81.3147 107.283 83.064 107.112 85.112C107.027 87.0747 106.941 89.72 106.856 93.048C106.856 96.2907 106.856 100.6 106.856 105.976H103.912C103.656 101.88 102.76 97.9547 101.224 94.2C99.688 90.4453 97.4267 87.3733 94.44 84.984C91.5387 82.5947 87.6987 81.4 82.92 81.4C78.3973 81.4 74.6427 82.7653 71.656 85.496C68.7547 88.2267 67.304 91.8107 67.304 96.248C67.304 100.088 68.2853 103.331 70.248 105.976C72.2107 108.536 74.8133 110.883 78.056 113.016C81.384 115.064 84.968 117.283 88.808 119.672C93.2453 122.403 97.1707 125.133 100.584 127.864C104.083 130.509 106.813 133.453 108.776 136.696C110.824 139.939 111.848 143.864 111.848 148.472C111.848 153.933 110.611 158.456 108.136 162.04C105.661 165.624 102.376 168.312 98.28 170.104C94.184 171.896 89.6613 172.792 84.712 172.792C80.1893 172.792 76.6053 172.28 73.96 171.256C71.3147 170.232 69.0533 169.165 67.176 168.056C65.2987 166.861 63.848 166.264 62.824 166.264C61.9707 166.264 61.3307 166.733 60.904 167.672C60.5627 168.611 60.264 170.019 60.008 171.896H57.064C57.2347 170.104 57.32 168.013 57.32 165.624C57.4053 163.149 57.448 159.949 57.448 156.024C57.5333 152.099 57.576 147.149 57.576 141.176H60.52C60.8613 146.296 61.8 151.075 63.336 155.512C64.9573 159.949 67.3893 163.533 70.632 166.264C73.96 168.909 78.3547 170.232 83.816 170.232C86.632 170.232 89.2773 169.677 91.752 168.568C94.312 167.373 96.4027 165.539 98.024 163.064C99.6453 160.504 100.456 157.219 100.456 153.208C100.456 149.709 99.6027 146.68 97.896 144.12C96.2747 141.475 93.9707 139.043 90.984 136.824C87.9973 134.52 84.4987 132.173 80.488 129.784C76.4773 127.309 72.7227 124.792 69.224 122.232C65.7253 119.672 62.9093 116.728 60.776 113.4C58.728 109.987 57.704 105.891 57.704 101.112C57.704 96.0773 58.8133 91.9387 61.032 88.696C63.336 85.368 66.3227 82.936 69.992 81.4C73.6613 79.7787 77.5867 78.968 81.768 78.968ZM165.613 78.584C171.245 78.584 175.853 79.4373 179.437 81.144C183.106 82.7653 186.349 84.6853 189.165 86.904C190.872 88.184 192.152 88.3547 193.005 87.416C193.944 86.392 194.584 84.0453 194.925 80.376H197.869C197.698 83.5333 197.57 87.3733 197.485 91.896C197.4 96.4187 197.357 102.392 197.357 109.816H194.413C193.816 106.147 193.261 103.245 192.749 101.112C192.237 98.8933 191.597 97.016 190.829 95.48C190.146 93.944 189.208 92.408 188.013 90.872C185.368 87.3733 182.04 84.856 178.029 83.32C174.018 81.6987 169.794 80.888 165.357 80.888C161.176 80.888 157.378 81.9547 153.965 84.088C150.637 86.136 147.736 89.1227 145.261 93.048C142.872 96.9733 140.994 101.709 139.629 107.256C138.349 112.803 137.709 119.032 137.709 125.944C137.709 133.112 138.434 139.469 139.885 145.016C141.336 150.477 143.341 155.085 145.901 158.84C148.546 162.595 151.618 165.453 155.117 167.416C158.701 169.293 162.541 170.232 166.637 170.232C170.477 170.232 174.488 169.464 178.669 167.928C182.85 166.392 186.136 163.917 188.525 160.504C190.402 158.029 191.682 155.341 192.365 152.44C193.133 149.539 193.816 145.485 194.413 140.28H197.357C197.357 148.045 197.4 154.317 197.485 159.096C197.57 163.789 197.698 167.757 197.869 171H194.925C194.584 167.331 193.986 165.027 193.133 164.088C192.365 163.149 191.042 163.277 189.165 164.472C186.008 166.691 182.637 168.653 179.053 170.36C175.554 171.981 171.032 172.792 165.485 172.792C157.378 172.792 150.253 170.957 144.109 167.288C138.05 163.619 133.314 158.328 129.901 151.416C126.573 144.504 124.909 136.184 124.909 126.456C124.909 116.899 126.658 108.536 130.157 101.368C133.656 94.2 138.434 88.6107 144.493 84.6C150.637 80.5893 157.677 78.584 165.613 78.584Z"
          fill="url(#paint3_linear_8_2)"
        />
        <defs>
          <filter
            id="filter0_f_8_2"
            x="234.436"
            y="73.7389"
            width="18.2607"
            height="80.3474"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_8_2"
            />
          </filter>
          <filter
            id="filter1_f_8_2"
            x="208.869"
            y="143.13"
            width="21.9126"
            height="98.6087"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_8_2"
            />
          </filter>
          <filter
            id="filter2_f_8_2"
            x="234.436"
            y="139.478"
            width="18.2607"
            height="102.261"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_8_2"
            />
          </filter>
          <filter
            id="filter3_f_8_2"
            x="208.869"
            y="73.7389"
            width="21.9126"
            height="80.3474"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_8_2"
            />
          </filter>
          <filter
            id="filter4_f_8_2"
            x="215.26"
            y="15.3045"
            width="31.9567"
            height="74.8694"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_8_2"
            />
          </filter>
          <filter
            id="filter5_f_8_2"
            x="216.176"
            y="18.9565"
            width="21.9137"
            height="65.739"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.65217"
              result="effect1_foregroundBlur_8_2"
            />
          </filter>
          <linearGradient
            id="paint0_linear_8_2"
            x1="82.8694"
            y1="8.00001"
            x2="208.869"
            y2="205.217"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CB9371" />
            <stop offset="1" stop-color="#532000" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_8_2"
            x1="212.523"
            y1="113.913"
            x2="256.349"
            y2="113.913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#834E2D" />
            <stop offset="1" stop-color="#B27B59" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_8_2"
            x1="208.87"
            y1="188.782"
            x2="260"
            y2="188.782"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#515152" />
            <stop offset="1" stop-color="#5E5D5E" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_8_2"
            x1="139.5"
            y1="204.966"
            x2="98.7241"
            y2="39.4479"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#532000" />
            <stop offset="1" stop-color="#CB9371" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
