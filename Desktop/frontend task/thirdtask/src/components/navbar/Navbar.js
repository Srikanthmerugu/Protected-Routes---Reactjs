import React from "react";
import "./navbar.css";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";

const Navbar = () => {
  return (
  <div>
      <div className="top-navbar">
        Offer - Buy 2 Get 1 Free SPF 50. Shop Now!

        
  </div>
      <div className="navbar-container">
      
       
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href=""></a>
            {/* <img
              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Minimalist-Logo-PNG-Mid.png?v=1712743274"
              alt="nav-img"
            /> */}
            <h3 className="fw-bold">Minimalist Cloned</h3>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item ">
                  <a
                    class="nav-link  dropdown-item  "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <div class="product-grid">
                      <div class="product-item">
                        <img
                          src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/Hairgrowthserum1200-2-min.png?crop=center&height=360&v=1646492070&width=240"
                          alt="Hair Product"
                        />
                        <div class="category-label dropdown-item">Hair</div>
                      </div>
                      <div class="product-item">
                        <img
                          src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/SPF501200-2-min.png?crop=center&height=1260&v=1646515554&width=840"
                          alt="Skin & Body Product"
                        />
                        <div class="category-label dropdown-item">Skin & Body</div>
                      </div>
                      <div class="product-item">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/MinimalistLIPBalmSPF30-min_1.png?crop=center&height=360&v=1665726557&width=240" alt="Lip Product" />
                        <div class="category-label dropdown-item">Lip</div>
                      </div>
                      <div class="product-item">
                        <img
                          src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Frizzimg1.png?crop=center&height=1260&v=1711112835&width=840"
                          alt="New Launches Product"
                        />
                        <div class="category-label dropdown-item">New Launches</div>
                      </div>
                    </div>{" "}
                  </ul>
                </li>

                {/* session 2 */}

                <li class="nav-item ">
                  <a
                    class="nav-link  dropdown-item "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
Best Sellers
                  </a>
                  <ul class="dropdown-menu">
                    <div class="product-grid">
                      <div class="product-item">
                        <img
                          src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/SPF501200-2-min.png?crop=center&height=1260&v=1646515554&width=840"
                          alt="Hair Product"
                        />
                        <div class="category-label ">
                          <span>₹ 295 MRP </span>
                          <span className="text-prce">₹ 299 </span>
                          <br />
                          Salicylic Acid
                        </div>
                      </div>
                      <div class="product-item">
                        <img
                          src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/18-min.png?crop=center&height=630&v=1679317872&width=420"
                          alt="Skin & Body Product"
                        />
                        <div class="category-label">
                          {" "}
                          <span>₹ 295 MRP </span>
                          <span className="text-prce">₹ 299 </span>
                          <br />
                          Salicylic Acid 2%{" "}
                        </div>
                      </div>
                      <div class="product-item">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/SalicylicAcid2_1200-1-min.png?crop=center&height=630&v=1646458899&width=420" alt="Lip Product" />
                        <div class="category-label">
                          {" "}
                          <span>₹ 295 MRP </span>
                          <span className="text-prce">₹ 299 </span>
                          <br />
                          Alpha Arbutin 2%
                        </div>
                      </div>
                      <div class="product-item">
                        <img
                          src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/NewNia10.png?crop=center&height=630&v=1666181139&width=420"
                          alt="New Launches Product"
                        />
                        <div class="category-label">
                          {" "}
                          <span>₹ 295 MRP </span>
                          <span className="text-prce">₹ 299 </span>
                          <br />
                          Vitamin C 10% Face Serum
                        </div>
                      </div>
                      <div class="product-item">
                        <img
                          src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/SepicalmMoisturizer1200-2.png?crop=center&height=630&v=1646471109&width=420"
                          alt="Skin & Body Product"
                        />
                        <div class="category-label">
                          {" "}
                          <span>₹ 295 MRP </span>
                          <span className="text-prce">₹ 299 </span>
                          <br />
                          Niacinamide 10%{" "}
                        </div>
                      </div>
                      {/* <div class="product-item">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/PHAToner1200-2-min.png?crop=center&height=630&v=1646482828&width=420" alt="Lip Product" />
                        <div class="category-label">
                          {" "}
                          <span>₹ 295 MRP </span>
                          <span className="text-prce">₹ 299 </span>
                          <br />
                          Salicylic Acid 2%
                        </div>
                      </div> */}
                    </div>{" "}
                  </ul>
                </li>

                {/* session 3 */}

                <li class="nav-item ">
                  <a
                    class="nav-link dropdown-item"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Skin + Body Care
                  </a>
                  <ul class="dropdown-menu">
                    
                      {/* First Row */}
                      <div className="Body-Care mt-3">
                        <div class="mb-4">
                          <div class="col">
                            <h6 className="fw-bold  dropdown-item">Shop by Concern</h6>
                            <ul>
                              <li>Acne</li>
                              <li>Pigmentation</li>
                              <li>Dehydration</li>
                              <li>UV Damage</li>
                              <li>Underarm Darkness</li>
                              <li>Oiliness</li>
                              <li>Dullness</li>
                              <li>Aging</li>
                            </ul>
                          </div>
                        </div>

                        {/* Second Row  */}
                        <div class="mb-4">
                          <div class="col">
                            <h6 className="fw-bold dropdown-item">Shop by Ingredients</h6>
                            <ul>
                              <li>Vitamin C</li>
                              <li>BHA / Salicylic Acid</li>
                              <li>Retinoid / Retinol</li>
                              <li>Niacinamide</li>
                              <li>UV Filters</li>
                              <li>Ceramide</li>
                              <li>Skin Care</li>
                             
                              <li>Body Care</li>
                              <li>Cleanse</li>
                              <li>Roll On</li>
                              <li>Lotion</li>
                            </ul>
                          </div>
                        </div>

                        {/* Third Row  */}
                        <div class="mb-4">
                          <div class="col">
                            <h6 className="fw-bold dropdown-item">Skin Care</h6>
                            <ul>
                              <li>Cleanse</li>
                              <li>Tone</li>
                              <li>Treat</li>
                              <li>Moisturize</li>
                              <li>SPF</li>
                              <li>Under Eye</li>
                              <li>Body Care</li>
                              <li>Cleanse</li>
                              <li>Roll On</li>
                              <li>Lotion</li>
                              <li>Lip</li>
                              <li>Treat</li>
                              <li>Protect</li>
                            </ul>
                          </div>
                        </div>

                        {/* Fourth Row  */}
                        <div class="mb-4">
                          <div class="col mx-3">
                            <div class="image-container">
                              <img
                                src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/AHAPHABHA32_1200-1-min.png?crop=center&height=630&v=1646480856&width=420" width="100%" height="350px"
                                alt="New Launch: Light Fluid SPF 50 Sunscreen"
                              />
                              <div class="overlay mt-3">
                                <p>New Launch: Light Fluid SPF 50 Sunscreen</p>
                                <p>
                                  Our Lightweight, Sweatproof, Fast-absorbing
                                  Formula
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
             






                    {/* session-4 */}
                  </ul>
                </li>

                <li class="nav-item ">
                  <a
                    class="nav-link dropdown-item"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hair
                  </a>
                  <ul class="dropdown-menu">
                    <div className="Body-Care mt-3">
                      <div class=" row mb-4 p-3">
                        <div class="col">
                          <h6 className="fw-bold Shop by Concern">Shop by Concern</h6>
                          <ul>
                            <li>Dehydration</li>
                            <li>UV Damage</li>
                            <li>Underarm Darkness</li>
                            <li>Oiliness</li>
                            <li>Dullness</li>
                            <li>Aging</li>
                          </ul>
                        </div>
                      </div>

                      {/* Second Row  */}
                      <div class="row mb-4">
                        <div class="col">
                          <h6 className="fw-bold Shop by Concern">Shop by Ingredients</h6>
                          <ul>
                            <li>Under Eye</li>
                            <li>Body Care</li>
                            <li>Cleanse</li>
                            <li>Roll On</li>
                            <li>Lotion</li>
                          </ul>
                        </div>
                      </div>

                      {/* Third Row  */}
                      <div class="row mb-4">
                        <div class="col">
                          <h6 className="fw-bold Shop by Concern">Skin Care</h6>
                          <ul>
                            <li>Under Eye</li>
                            <li>Body Care</li>
                            <li>Cleanse</li>
                            <li>Roll On</li>
                            <li>Lotion</li>
                          </ul>
                        </div>
                      </div>

                      {/* Fourth Row  */}
                      <div class="row mb-4">
                        <div class="col  mx-3">
                          <div class="image-container">
                            <img
                              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/LiqSPF502.png?v=1709705614&width=480"
                              width="500px" height="400px"
                              alt="New Launch: Light Fluid SPF 50 Sunscreen"
                            />
                            <div class="overlay mt-3">
                              <p>New Launch: Light Fluid SPF 50 Sunscreen</p>
                              <p>
                                Our Lightweight, Sweatproof, Fast-absorbing
                                Formula
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                {/* <li class="nav-item ">
                  <a
                    class="nav-link dropdown-item"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hair Care
                  </a>
                  <ul class="dropdown-menu">
                    <h1>home pagesas</h1>
                  </ul>
                </li> */}

                <li class="nav-item ">
                  <a
                    class="nav-link dropdown-item"
                    href="#"
                  
                  >
                    Build Your Routine
                  </a>
                  {/* <ul class="dropdown-menu">
                    <div className="build-routine">
                      <div>
                        <img src="" />
                      </div>
                      <div>
                        {" "}
                        <img src="" width="300px" height="200px" />
                      </div>
                      <div>
                        {" "}
                        <img src="" width="300px" height="200px" />
                      </div>
                    </div>
                    <div className="build-routine">
                      <div>
                        {" "}
                        <img src="" width="300px" height="200px" />
                      </div>
                      <div>
                        {" "}
                        <img src="" width="300px" height="200px" />
                      </div>
                      <div>
                        {" "}
                        <img src="" width="300px" height="200px" />
                      </div>
                    </div>
                  </ul> */}
                </li>

                <li class="nav-item ">
                  <a
                    class="nav-link dropdown-item"
                    href="#"
                   
                  >
                    Track Order
                  </a>
                  {/* <ul class="dropdown-menu">
                    <h1>home page sas</h1>
                  </ul> */}
                </li>

                <li class="nav-item ">
                  <a
                    class="nav-link dropdown-item "
                    href="#"
                                     >
                    Knowledge
                  </a>
                  {/* <ul class="dropdown-menu">
                    <h1>home pagesaa</h1>
                  </ul> */}
                </li>
              </ul>
              <form class="d-flex" role="search">
              
              <span class="nav-item ">
                {" "}
                <IoSearch />
              </span>
              <span class="nav-item px-3 ">
                {" "}
                <FaRegUser />
              </span>
              <span class="nav-item "></span>

              <span type="" class="position-relative">
                <PiShoppingCartBold />

                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </span>
             
              </form>
            </div>
          </div>
        </nav>
        <hr/>




        
      </div>
      </div>
  
  );
};

export default Navbar;
