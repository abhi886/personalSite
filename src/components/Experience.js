import React from "react";

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>experience</h1>
      </div>
      <div className='container experience-wrapper'>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2012-2016</h3>
            <p>
              <b>
                Bachelor of Science in Computer Science and Information
                Technology
              </b>
              <br />
              St. Xavier’s College, Kathmandu, Nepal | Nov 2012 to Jul 2017
            </p>
            <p>
              <b>Internship</b>
            </p>
            <p>
              <span>
                <b>Web Developer Intern</b>
              </span>
              <br /> Pagoda Labs Pvt. Ltd. Kathmandu, Nepal | July 2016 –
              December 2016 (Full Time)
            </p>
          </div>
        </div>
        {/*.-*/}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2017-2018</h3>
            <p>
              <b>Full Stack Web Developer</b>
              <br />
              Rolling Plans Pvt. Ltd. Kathmandu, Nepal | jan 2017 – Nov 2018
              (Full-Time)
            </p>
          </div>
        </div>
        {/*.-*/}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2018-Present</h3>
            <p>
              <b>Software Engineer - Self Employed / Self Learning </b>
              <br />
              ACT, Australia | Nov 2018 – Present (Full Time)
            </p>
          </div>
        </div>
        {/*.-*/}
      </div>
    </div>
  );
};

export default Experience;
