import '../../styles/PageMenu.css'
export default function PageMenu({ menus }) {
  const Arrow = () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="black" />
      </svg>
    );
  };

  return (
    <div className='menus'>
      {menus.map((menu, i) => {
        return (
          <div key={i} className="buttonMenu" onClick={()=> window.location.replace(menu.url)}>
            <div>{menu.title}</div>
            <Arrow />
          </div>
        );
      })}
    </div>
  );
}
