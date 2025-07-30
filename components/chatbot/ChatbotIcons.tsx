function GoldenSend({ size = 18 }: { size?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 19 19`} fill="none">
    <path d="M15.3583 5.51013L6.79835 1.23013C1.04835 -1.64987 -1.31165 0.710135 1.56835 6.46013L2.43835 8.20013C2.68835 8.71013 2.68835 9.30013 2.43835 9.81013L1.56835 11.5401C-1.31165 17.2901 1.03835 19.6501 6.79835 16.7701L15.3583 12.4901C19.1983 10.5701 19.1983 7.43013 15.3583 5.51013ZM12.1283 9.75013H6.72835C6.31835 9.75013 5.97835 9.41013 5.97835 9.00013C5.97835 8.59013 6.31835 8.25013 6.72835 8.25013H12.1283C12.5383 8.25013 12.8783 8.59013 12.8783 9.00013C12.8783 9.41013 12.5383 9.75013 12.1283 9.75013Z" fill="url(#paint0_linear_1676_63810)"/>
    <defs>
      <linearGradient id="paint0_linear_1676_63810" x1="0.33789" y1="8.01846" x2="18.2383" y2="8.01846" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C79438"/>
        <stop offset="0.29" stop-color="#D1A13D"/>
        <stop offset="0.655" stop-color="#C58B18"/>
        <stop offset="1" stop-color="#A2650D"/>
      </linearGradient>
    </defs>
  </svg>;
}

export default class ChatbotIcons {
  static GoldenSend = GoldenSend;
}