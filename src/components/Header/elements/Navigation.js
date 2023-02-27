import Link from "next/link";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul className={clsx("d-flex", positionClass ? positionClass : "justify-content-end")}>
        {/* <li>
          <Link href="/" className="nav-link">
            HOME<IoIosArrowDown />

          </Link>

          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/home/fashion-one">
                Fashion Home One
              </Link>
            </li>
            <li>
              <Link href="/home/fashion-two">
                Fashion Home Two
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-one">
                Furniture Home One
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-two">
                Furniture Home Two
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-one">
                Electronics Home One
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-two">
                Electronics Home Two
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <Link href="/" className="nav-link">
            MORE<IoIosArrowDown />

          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/other/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/other/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/other/faq">
                F.A.Q
              </Link>
            </li>
            <li>
              <Link href="/other/not-found">
                404 Error Page
              </Link>
            </li>
            <li>
              <Link href="/other/login">
                Login
              </Link>
            </li>
            <li>
              <Link href="/other/register">
                Register
              </Link>
            </li>
            <li>
              <Link href="/other/terms">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <Link href="/" className="nav-link">
            BLOG<IoIosArrowDown />

          </Link>
          <ul className="sub-menu sub-menu--one-column sub-menu--one-column--has-children sub-menu--one-column--reverse">
            <li>
              <Link href="/blog/grid-four-columns">
                Grids<IoIosArrowForward />

              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/grid-three-columns">
                    Three Columns
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-four-columns">
                    Four Columns
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-left-sidebar">
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-right-sidebar">
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-left-sidebar">
                    Standard Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-right-sidebar">
                    Standard Right Sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/list-left-sidebar">
                Lists<IoIosArrowForward />

              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/list-left-sidebar">
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/list-right-sidebar">
                    Right Sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/post-left-sidebar">
                Single Post<IoIosArrowForward />

              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/post-left-sidebar">
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-right-sidebar">
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-slider">
                    Slider Post
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-audio">
                    Audio Post
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-video">
                    Video Post
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/other/affiliate" className="nav-link">
          Affiliate Program
          </Link>
        </li>            
        {/* <li>
          <Link href="/other/eth" className="nav-link">
          How To Buy Using Ethereum
          </Link>
        </li>         */}
        <li>
          <Link href="/other/about-us" className="nav-link">
            About Us
          </Link>
        </li>        
        {/* <li>
          <Link href="/other/contact-us" className="nav-link">
            CONTACT US
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
