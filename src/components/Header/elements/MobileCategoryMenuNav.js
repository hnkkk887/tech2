import { useEffect } from "react";
import Link from "next/link";

const MobileCategoryMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-category-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-category-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/products/computer">
          Computer
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                Featured Item
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                Popular Item
              </Link>
              <ul className="mobile-sub-menu">
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
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/products/mobile&tablet">
          Mobile & Tablet
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
            <Link href="/shop/product-basic/63f00a85b2431b9cc1b07141">
            SAMSUNG Galaxy S22 Ultra Burgundy
          </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                Popular Item
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                New Item
              </Link>
              <ul className="mobile-sub-menu">
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
        <li className="menu-item-has-children">
          <Link href="/products/camera">
          Camera
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                Featured Item
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                Popular Item
              </Link>
              <ul className="mobile-sub-menu">
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
          </ul>
        </li>

        <li>
          <Link href="/products/accessories">
            Accessories
          </Link>
        </li>
        <li>
          <Link href="/products/gaming">
            Gaming
          </Link>
        </li>
        <li>
          <Link href="/products/watches">
          Watches
          </Link>
        </li>
        <li>
          <Link href="/products/tv">
          TV & Smart Box
          </Link>
        </li>
        <li>
          <Link href="/products/mining">
          Mining Hardware
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default MobileCategoryMenuNav;
