import "../../styles/Navbar.css";
import PageMenu from "./PageMenu";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 535px)");
  const CartIcon = () => {
    return (
      <svg
        width="18"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 30C11.1046 30 12 29.1046 12 28C12 26.8954 11.1046 26 10 26C8.89543 26 8 26.8954 8 28C8 29.1046 8.89543 30 10 30Z"
          fill="black"
        />
        <path
          d="M24 30C25.1046 30 26 29.1046 26 28C26 26.8954 25.1046 26 24 26C22.8954 26 22 26.8954 22 28C22 29.1046 22.8954 30 24 30Z"
          fill="black"
        />
        <path
          d="M28 7.0002H5.82L5 2.8002C4.95325 2.57093 4.82758 2.36531 4.64486 2.21913C4.46214 2.07296 4.23395 1.99549 4 2.0002H0V4.0002H3.18L7 23.2002C7.04675 23.4295 7.17242 23.6351 7.35514 23.7813C7.53786 23.9275 7.76605 24.0049 8 24.0002H26V22.0002H8.82L8 18.0002H26C26.2312 18.0059 26.4571 17.9312 26.6395 17.789C26.8218 17.6468 26.9492 17.4458 27 17.2202L29 8.2202C29.0335 8.07183 29.0327 7.91776 28.9977 7.76974C28.9627 7.62171 28.8944 7.48362 28.798 7.36597C28.7015 7.24833 28.5795 7.15424 28.4413 7.09085C28.303 7.02747 28.1521 6.99647 28 7.0002ZM25.2 16.0002H7.62L6.22 9.0002H26.75L25.2 16.0002Z"
          fill="black"
        />
      </svg>
    );
  };
  const FindIcon = () => {
    return (
      <svg
        width="18"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
          fill="black"
        />
      </svg>
    );
  };
  const MenuIcon = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z"
          fill="black"
        />
        <path
          d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z"
          fill="black"
        />
        <path
          d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z"
          fill="black"
        />
      </svg>
    );
  };
  return (
    <div className="navbar container">
      {!isMobile ? (
        <>
          <PageMenu
            menus={[
              { title: "Demos", url: "/" },
              { title: "Pages", url: "#" },
              { title: "Portofolio", url: "#" },
            ]}
          />
          <div className="rightMenu">
            <CartIcon />
            <div className="searchDiv">
              <FindIcon />
              <input className="inputSearch"></input>
            </div>
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div className="rightMenu">
            <FindIcon />
            <CartIcon />
            <MenuIcon />
          </div>
        </>
      )}
    </div>
  );
}
