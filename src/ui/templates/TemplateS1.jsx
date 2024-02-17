import React from "react";
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";
function TemplateS1() {
  const skillarray = ["Frontend", "Bakcend", "Python", "C++"];
  const EduDetails = [
    "Completed 10th and 12th from ICSE School",
    "Completed B.Tech in CSE from ABC University",
    "Completed M.Tech in CSE from ABC University",
  ];
  const userInputData = useSelector(selectUserData);
  return (
    <div
      className="a4-sheet  bg-white w-[794px] h-[1123px] lg:max-h-[1123px] lg:overflow-y-auto flex flex-col items-center mt-[50px] border-[2px] "
      style={{ transform: "scale(0.9)" }}
    >
      {/* coloured box area  */}
      <div className="pfp-details  flex flex-row items-center justify-between bg-[rgb(99,133,255)] h-[220px] w-[750px] m-[50px] rounded-[120px_5px_50px_120px]">
        <div className="pfp  bg-[white] w-[180px] h-[180px] border m-[15px] rounded-[50%] border-solid border-[gray]" />

        <div className="details-space  flex flex-col items-center justify-center w-[220px]">
          {/* name  */}
          <div className="name flex flex-row items-center justify-center">
            <p className="text-3xl font-[bold] text-[white] m-0.5">
              {userInputData && userInputData.firstName
                ? userInputData.firstName
                : "Saksham"}
            </p>
            <p className="text-3xl font-[bold] text-[white] m-0.5">
              {userInputData && userInputData["last-name"]
                ? userInputData["last-name"]
                : "Gupta"}
            </p>
          </div>
          <div className="w-[300px] h-px bg-white m-2.5 border-[none]" />

          {/* Occupation  */}
          <div className="occupation">
            <p className="text-xl font-[bold] text-[white] m-0.5">
              MERN Stack Developer
            </p>
          </div>
        </div>

        {/* mail and phone number  */}

        <div className="email-phno-space  flex flex-col items-end w-40 text-[white] text-sm m-2.5">
          <div className="email font-medium">
            <p className="m-1">oDfJt@example.com</p>
          </div>
          <div className="phno font-medium">
            <p className="m-1">1234567890</p>
          </div>

          {/* Address line  */}
          <div className="city-and-state font-semibold">
            <p>121-a9, ABC Highrise,</p>
          </div>
          <div className="city-and-state font-semibold">
            <p>Jaipur, Rajasthan</p>
          </div>
        </div>
      </div>
      {/* colorless area  */}
      <div className="data-space">
        {/* About me  */}
        <div className="about-me h-[380px] bg-[rgba(255,255,255,0.448)] w-[720px]">
          <div className="about">
            <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
              About me
            </h2>
            <div className="text-[17px] text-[rgb(84,84,84)] m-[15px]">
              <p>
                Human resources generalist with 8 years of experience in HR,
                including hiring and terminating, disciplining employees and
                helping department managers improve employee performance. Worked
                with labor unions to negotiate compensation packages for
                workers. Organized new hire training initiatives as well as
                ongoing training to adhere to workplace safety standards. Worked
                with OSHA to ensure that all safety regulations are followed.
              </p>
            </div>
          </div>

          <div className="professional-experience">
            <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
              Professional Experience
            </h2>
            <p className="text-[17px] text-[rgb(84,84,84)] m-[15px]">
              Worked with labor unions to negotiate compensation packages for
              workers. Organized new hire training initiatives as well as
              ongoing training to adhere to workplace safety standards. Worked
              with OSHA to ensure that all safety regulations are followed.
            </p>
          </div>
        </div>

              <hr className='w-[700px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]'/>

              {/* Professional skills  */}
              <div className="skilldev flex flex-row items-center justify-between w-[700px] h-[280px] bg-[rgba(255,255,255,0.448)]">
                  <div className='skill-set w-[450px] h-[230px] text-base m-5 p-5 rounded-[20px]'>
                   <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>Key Skills</h2>
                    <div className="skillarray">
                    {
                      skillarray.map((item)=>{
                        return <div className='flex m-4 flex-row items-center'><div className='w-[100px] h-3 bg-[rgb(99,133,255)] mx-2.5 my-0'/> <p>{item}</p></div>
                      })
                    }

                    </div>
                  </div>
                    
                  {/* education details  */}
                  <div className="educationbox">
                    <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>Education</h2>
                    {
                      EduDetails.map((item)=>{
                        return <div className='flex flex-row items-center justify-start'><div className=" w-3 h-2.5 bg-[rgb(99,133,255)] m-2.5 rounded-[50px]"/><p>{item}</p></div>
                      })
                    }
                  </div>

              </div>

              <hr className='w-[700px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]' />
            </div>
        </div>
        <hr className="w-[600px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]" />
        {/* Adding additional sections based on userData */}
        {/* Languages */}
        {userInputData && userInputData.language ? (
          <>
            <h1 className="languages  text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
              Languages
            </h1>
            {userInputData.language.map((lan) => {
              return (
                <ul
                  key={lan[2]}
                  className="text-[10px] text-gray-500 leading-5  pt-2 flex gap-[10px]"
                >
                  <li className="list-item text-black  w-[150px]">
                    {lan[0]} - {lan[1]}
                  </li>
                </ul>
              );
            })}
          </>
        ) : null}

        {/* Projects */}
        {userInputData && userInputData.projects ? (
          <>
            <h1 className="projects  text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
              Projects
            </h1>
            {userInputData.projects.slice(1).map((project) => {
              return (
                <ul
                  key={project.id}
                  className="text-[10px] text-gray-500 leading-5  pt-2 flex gap-[10px] "
                >
                  <li className=" w-full ">
                    <div className="project-header flex flex-row gap-[15px] items-center">
                      <h2 className="text-lg heading">{project.Heading}</h2>
                      <a
                        href={project.Link}
                        className="text-md text-cyan-600 cursor-pointer"
                      >
                        {project.Link}
                      </a>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </li>
                </ul>
              );
            })}
          </>
        ) : null}

        {/* Custom Form */}
        {userInputData && userInputData.customData
          ? userInputData.customData.slice(1).map((customData) => {
              return (
                <ul
                  key={customData.id}
                  className="text-[10px] text-gray-500 leading-5  pt-2 flex gap-[10px] "
                >
                  <li className=" w-full ">
                    <h1 className="custom-data  text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
                      {customData.Custom_Heading}
                    </h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: customData.description,
                      }}
                    />
                  </li>
                </ul>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default TemplateS1;