import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SlideDown } from "react-slidedown";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";

const CategoryMenuTwo = () => {
  const [categoryMenuExpandStatus, setCategoryMenuExpandStatus] = useState(
    false
  );
  const [
    categoryMenuItemExpandStatus,
    setCategoryMenuItemExpandStatus
  ] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if(router.route === "/") {
      setCategoryMenuExpandStatus(true);
    }
  }, [])

  return (
    <div className="header-categories-wrap">
      <button
        className="category-menu-trigger"
        onClick={() => setCategoryMenuExpandStatus(!categoryMenuExpandStatus)}
      >
        <IoIosMenu /> ALL CATEGORIES
      </button>
      <nav className="category-menu dark-skin">
        <SlideDown closed={categoryMenuExpandStatus ? false : true}>
          <ul>
            <li className="has-children-mega">
              <Link href="/products/computer" className="nav-link">

                <i className="flaticon-tv"></i>{" "}
                <span>
                  Computer <IoIosArrowForward />
                </span>

              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--category--with-banner sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        HP Pavilion 15
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        ASUS TUF Dash 15
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        MSI Katana GF66
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                         Acer Nitro 5
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        CyberpowerPC
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        MSI Pulse GL66
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        HP Pavilion x360
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Alienware Aurora R14
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Acer Swift X 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        ASUS ROG Strix G15
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        ASUS ROG Flow Z13
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Acer Predator Helios 300 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                      ASUS TUF Gaming A15                      
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <img
                      src="/assets/images/banner/menu_banner7.jpg"
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6>10% Off</h6>
                      <h4>New Arrival</h4>
                      <Link href="/shop/grid-left-sidebar">
                        Shop now
                      </Link>
                    </div>
                  </div>
                  <div className="header-banner p-0">
                    <img
                      src="/assets/images/banner/menu_banner8.jpg"
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6>10% Off</h6>
                      <h4>New Arrival</h4>
                      <Link href="/shop/grid-left-sidebar">
                        Shop now
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="has-children-mega">
              <Link href="/products/mobile&tablet" className="nav-link">

                <i className="flaticon-responsive"></i>{" "}
                <span>
                  Mobile & Tablet <IoIosArrowForward />
                </span>

              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S22 Ultra Burgundy
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S23+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy Z Fold 4
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S23+ Black
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy Z Flip 3 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Google Pixel 6 Pro
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy Z Flip 4 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        REDMAGIC 7S Pro
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        OnePlus 11 5G
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Galaxy Z Fold 2
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        iPhone 13 Pro Max
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S22
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S22 Ultra
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S22+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Vertu METAVERTU
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Galaxy Note 20
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">NEW ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Samsung Galaxy S10+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S21+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        SAMSUNG Galaxy S21 FE
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Apple iPhone 14
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Galaxy S23 Ultra 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        OnePlus 10 Pro
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children-mega">
              <Link href="/products/camera" className="nav-link">

                <i className="flaticon-camera"></i>{" "}
                <span>
                  Camera <IoIosArrowForward />
                </span>

              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--category--with-banner sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Panasonic LUMIX S5II 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Nikon D850
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Sony Alpha ZV-E10
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Panasonic LUMIX GX85
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Canon EOS Rebel SL3
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Sony Alpha 7
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Tamron 50-400mm f/4.5-6.3
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Canon EOS M50 Mark II
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Tamron 20-40mm f/2.8
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        Nikon COOLPIX P950 
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <Link href="/shop/grid-left-sidebar">

                      <img
                        src="/assets/images/banner/menu_banner9.jpg"
                        alt="menu_banner1"
                      />

                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/products/accessories" className="nav-link">

                <i className="flaticon-plugins"></i> <span>Accessories</span>

              </Link>
            </li>
            {/* <li>
              <Link href="/shop/grid-left-sidebar" className="nav-link">

                <i className="flaticon-headphones"></i>{" "}
                <span>Headphones</span>

              </Link>
            </li> */}
            <li>
              <Link href="/products/gaming" className="nav-link">

                <i className="flaticon-console"></i> <span>Gaming</span>

              </Link>
            </li>
            {/* <li>
              <Link href="/shop/grid-left-sidebar" className="nav-link">

                <i className="flaticon-ball"></i> <span>Sports</span>

              </Link>
            </li> */}
            <SlideDown closed={categoryMenuItemExpandStatus ? false : true}>
              <li>
                <Link href="/products/watches" className="nav-link">

                  <i className="flaticon-watch"></i> <span>Watches</span>

                </Link>
              </li>
              {/* <li>
                <Link href="/shop/grid-left-sidebar" className="nav-link">

                  <i className="flaticon-music-system"></i>{" "}
                  <span>Home Audio & Theater</span>

                </Link>
              </li> */}
              <li>
                <Link href="/products/tv" className="nav-link">

                  <i className="flaticon-monitor"></i>{" "}
                  <span>TV & Smart Box</span>

                </Link>
              </li>
              <li>
                <Link href="/products/mining" className="nav-link">

                <i className="flaticon-music-system"></i> <span>Mining Hardware</span>

                </Link>
              </li>
            </SlideDown>
            <li>
              <button
                className="category-menu-expand-trigger"
                onClick={() =>
                  setCategoryMenuItemExpandStatus(!categoryMenuItemExpandStatus)
                }
              >
                More Categories <span>+</span>{" "}
              </button>
            </li>
          </ul>
        </SlideDown>
      </nav>
    </div>
  );
};

export default CategoryMenuTwo;
