import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faGlasses,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div>
      <div id='blog' className='blog'>
        <div className='blog-heading container'>
          <h2 className='py-5'>
            {" "}
            <FontAwesomeIcon className='icon' icon={faBlog} size='2x' /> My
            Latest Blogs{" "}
          </h2>
          <div className='row blogs-content '>
            <div className='borderbox btm-5m col-md-12'>
              <div className='row cm10-row'>
                <div className='col-md-5'>
                  <div className='img-box'>
                    <img
                      className='blog-img'
                      src='https://rollingnexus.com/image/cache/catalog/Blogs_JPEG_Feb/Most-common-job-interview-question-II.jpg-540x300.jpg'
                      alt='author...'
                    />
                    <div className='overlay'></div>
                  </div>
                </div>
                <div className='col-md-7'>
                  <h5>You Dont Need To Remember Everythig to Code...</h5>
                  <ul className='sub-title'>
                    {" "}
                    <li>
                      <i className='fa fa-calendar' aria-hidden='true'></i> Jun
                      25, 2021
                    </li>{" "}
                    <li>
                      <FontAwesomeIcon
                        className='icon'
                        icon={faGlasses}
                        size=''
                      />
                      {/* <i className='far fa-eye' aria-hidden='true'></i> */}(
                      About 5 mins read )
                    </li>{" "}
                  </ul>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus, magnam. Quasi dolore porro unde, ex at,
                    ducimus facere cumque sed, odit dolorum aliquam et adipisci
                    blanditiis autem incidunt. Velit, id?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='blog-btn-viewMore'>
            <Link to='/' className='btn-blog '>
              {" "}
              View All{" "}
              <FontAwesomeIcon className='icon' icon={faArrowRight} size='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
