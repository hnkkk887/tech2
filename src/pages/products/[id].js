import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutOne, LayoutTwo, LayoutThree, LayoutFour, LayoutFive } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import { setProducts, setMoreProducts } from "../../store/slices/product-slice";
import { useRouter } from 'next/router';

const GridLeftSidebar = () => {
  const { products } = useSelector((state) => state.product);
  const [layout, setLayout] = useState("grid");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitNr, setLimitNr] = useState(2);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const pageLimit = 999;

  const getLayout = (layout) => {
    setLayout(layout);    
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);

    if(sortValue === "cryptocurrency mining") {
        router.push(`/products/mining`);
    } else {
      router.push(`/products/${sortValue}`);
    }
  };

  const getFilterSortParams = (sortType, sortValue) => {
    console.log(sortValue, "valueeeeeeeeeee")
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  async function getProducts() {
    let price = sortValue === "priceHighToLow" ? -1 : 1;
    const res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/products/${router.query.id}`, { fPage: true, category: router.query.id, filter: price });
    dispatch(setProducts(res.data));
  }

  useEffect(() => {
    getProducts();
  }, [sortValue])

  useEffect(() => {
    (async function() {
        let price = sortValue === "priceHighToLow" ? -1 : 1;
        const res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/products/${router.query.id}`, { filter: price, fPage: false, category: router.query.id, currentPage: currentPage });

        dispatch(setMoreProducts(res.data));
    })()
  }, [currentPage])

  useEffect(() => {
    getProducts();
  }, [router.query.id])  

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Shop">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Shop</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              {/* shop page header */}
              <ShopHeader
                getLayout={getLayout}
                getFilterSortParams={getFilterSortParams}
                shopTopFilterStatus={shopTopFilterStatus}
                setShopTopFilterStatus={setShopTopFilterStatus}
                layout={layout}
              />
              {/* shop products */}
              <ShopProducts layout={layout} products={currentData} />

              {/* shop product pagination */}
              <div className="pagination pagination-style pagination-style--two justify-content-center">
                {/* <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
                /> */}
                {products.length ? <Button variant="info" onClick={() => setCurrentPage(prev => prev+1)}>more</Button> : null}
              </div>
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              {/* sidebar */}
              <Sidebar products={products} getSortParams={getSortParams} />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default GridLeftSidebar;