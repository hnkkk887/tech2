import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import TextOne from "../../components/TextWithImage/TextOne";
import { TeamMemberOne } from "../../components/TeamMember";
import { TestimonialOne } from "../../components/Testimonial";
import { IconBoxOne, IconBoxTwo } from "../../components/IconBox";

import teamMemberOneData from "../../data/team-member/team-member-one.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";

const Affiliate = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Affiliate">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Affiliate</li>
        </ol>
      </BreadcrumbOne>
      {/* text with image */}
      <TextOne />
      {/* icon box */}
      {/* <IconBoxTwo /> */}
      {/* team member*/}
      {/* <TeamMemberOne teamMemberData={teamMemberOneData} /> */}
      {/* testimonial */}
      {/* <TestimonialOne testimonialData={testimonialOneData} /> */}
      {/* icon box */}
      {/* <IconBoxOne /> */}
    </LayoutOne>
  );
};

export default Affiliate;
