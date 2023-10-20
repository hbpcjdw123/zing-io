import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import Link from "next/link";
import items from "../../../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");
  const services = [
    {
      iconSrc: "/images/icon/cubes.png",
      title: "Product Game Education",
      delay: "100",
    },
    {
      iconSrc: "/images/icon/coding.png",
      title: "Zing Academy  (Scratch)",
      delay: "200",
    },
    {
      iconSrc: "/images/icon/upcoming.png",
      title: "Competiton and event",
      delay: "300",
    },
  ];

  const filteredItems =
    filter === "*"
      ? items.slice(51, 55)
      : items.slice(51, 55).filter((item) => item.category.includes(filter));
  

  return (
    <>
      <div className="row gx-xxl-5" style={{ padding: '100px'}}>
        {services.map((service, index) => (
          <div
            className="col-lg-4 col-sm-6"

            key={index}
          >
            <div className="card-style-sixteen tran3s text-center position-relative mt-40"
              style={{backgroundColor:'#706fd3'}}>
              <div className="icon">
                <img
                  src={service.iconSrc}
                  alt="icon"
                  className="lazy-img m-auto"
                  width={80}
                  height={80}
                />
                
              </div>
              <p className="fs-20 m0 pt-20"></p>
              <h4 className="" style={{color:'#ffa801'}}>{service.title}</h4>
              {/* /pages-menu/service-details */}
              <Link
                href="#"
                className="read-more rounded-circle text-start tran3s"
              >
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
