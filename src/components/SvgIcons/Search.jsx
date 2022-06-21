import * as React from 'react'
// width, height, fill - передается изх пропсов
// но дефолтные значения такие как сейчас
function SearchIcon(props) {
  const { width = 24, hieght = 24, fill = '#fff' } = props;

  return (
    <svg
      width={width}
      height={hieght}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 9H2V7h5v2Zm0 3H2v2h5v-2Zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19ZM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3ZM2 19h10v-2H2v2Z"
        fill={fill}
      />
    </svg>
  )
}

export default SearchIcon
