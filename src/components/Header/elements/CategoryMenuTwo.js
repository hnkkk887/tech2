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
                      <Link href="/shop/product-basic/63efb56cf1cf7192e6eef6be">
                        HP Pavilion 15
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63efba0947dd2b6b7aa315b3">
                        ASUS TUF Dash 15
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63efe11c5d0eacc014279d29">
                        MSI Katana GF66
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63efe4c7f23c465d954660fc">
                         Acer Nitro 5
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63efe868f359c171554bfc1b">
                        CyberpowerPC
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63efe2dd090a787ba385d94d">
                        MSI Pulse GL66
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63efee2925cd1f9479972f8d">
                        HP Pavilion x360
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/product-basic/63efeffdd2770a67b8dacdd0">
                        Alienware Aurora R14
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63effe2ce7f6e23321652214">
                        Acer Swift X 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0022896edb76d86b5e14c">
                        ASUS ROG Strix G15
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0041954705bc7bb0d0805">
                        ASUS ROG Flow Z13
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f006f2dda50b13a145bc1f">
                        Acer Predator Helios 300 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f008858431d969afd45e4e">
                      ASUS TUF Gaming A15                      
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <img
                      src="/assets/images/banner/menu_banner7.jpg"
                      style={{ objectFit: "contain", height: "200px" }}
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6 style={{ backgroundColor: "#fff", padding: "1px", display: "inline-block" }}>25% Off</h6>
                      <h4 style={{ backgroundColor: "#fff", padding: "1px", display: "inline-block" }}>new Apple iPhone 14</h4>
                      <Link style={{ backgroundColor: "#fff", padding: "1px", display: "inline-block" }} href="/shop/product-basic/63f0bbff9f14a6b654de05ea">
                        Shop now
                      </Link>
                    </div>
                  </div>
                  <div className="header-banner p-0">
                    <img
                      src="/assets/images/banner/menu_banner8.jpg"
                      style={{ objectFit: "contain", height: "200px" }}
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6 style={{ backgroundColor: "#fff", padding: "1px", display: "inline-block" }}>25% Off</h6>
                      <h4 style={{ backgroundColor: "#fff", padding: "1px", display: "inline-block" }}>SAMSUNG Galaxy S23+</h4>
                      <Link style={{ backgroundColor: "#fff", padding: "1px", display: "inline-block" }} href="/shop/product-basic/63f00cf771cdcc8e9f0d3c78">
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
                      <Link href="/shop/product-basic/63f00a85b2431b9cc1b07141">
                        SAMSUNG Galaxy S22 Ultra Burgundy
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f00cf771cdcc8e9f0d3c78">
                        SAMSUNG Galaxy S23+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f00ec145d70591aeef77ef">
                        SAMSUNG Galaxy Z Fold 4
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0130d18acd8d26a86e73e">
                        SAMSUNG Galaxy S23+ Black
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f020943aa5b46b9a337d53">
                        SAMSUNG Galaxy Z Flip 3 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f022b06b3456585c30ad6d">
                        Google Pixel 6 Pro
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0249265e900f08a655ff7">
                        SAMSUNG Galaxy Z Flip 4 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f02608952b49795c9f7660">
                        REDMAGIC 7S Pro
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/product-basic/63f027c0537d87e34ebb2dd5">
                        OnePlus 11 5G
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f02a34ffe107ad3ea1e39b">
                        Galaxy Z Fold 2
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f02bab7f66954afc4b1632">
                        iPhone 13 Pro Max
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f02def6b7583539f8acfc7">
                        SAMSUNG Galaxy S22
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f037c6757dc77f0f9eb944">
                        SAMSUNG Galaxy S22 Ultra
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f039d5aaadeaf416611062">
                        SAMSUNG Galaxy S22+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f03c284c1b3c9ee8614c53">
                        Vertu METAVERTU
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f03da460d7b553780866a4">
                        Galaxy Note 20
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">NEW ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/product-basic/63f03f955f71b7997205fa48">
                        Samsung Galaxy S10+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0b57b71ff68ec3155e4ad">
                        SAMSUNG Galaxy S21+
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0b74cceeed0654fd8c07c">
                        SAMSUNG Galaxy S21 FE
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0bbff9f14a6b654de05ea">
                        Apple iPhone 14
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0bf1c029aa2323f591c89">
                        Galaxy S23 Ultra 
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
                      <Link href="/shop/product-basic/63f0d0abe871532e6c6580cd">
                        Panasonic LUMIX S5II 
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0d1ece871532e6c6580cf">
                        Nikon D850
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0dfb1687a576ff140a4f3">
                        Sony Alpha ZV-E10
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0e13704b47849f6395eea">
                        Panasonic LUMIX GX85
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0ea9b869b5affacb71561">
                        Canon EOS Rebel SL3
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0ec06258df6fcf995f504">
                        Sony Alpha 7
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0ed0c258df6fcf995f506">
                        Tamron 50-400mm f/4.5-6.3
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0f8e93ae29b359acb242f">
                        Canon EOS M50 Mark II
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/product-basic/63f0facece5e1ffe66df1a0b">
                        Tamron 20-40mm f/2.8
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/product-basic/63f0fc81eab3ed4154446c8d">
                        Nikon COOLPIX P950 
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <Link href="/shop/product-basic/63f0ed0c258df6fcf995f506">

                      <img
                        src="/assets/images/banner/menu_banner9.jpg"
                        style={{ objectFit: "contain", height: "300px" }}
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
              <Link href="/shop/product-basic/" className="nav-link">

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
              <Link href="/shop/product-basic/" className="nav-link">

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
                <Link href="/shop/product-basic/" className="nav-link">

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
