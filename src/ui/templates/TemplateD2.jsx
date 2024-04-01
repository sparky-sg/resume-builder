import { useState } from "react";
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";
import { selectExperienceData } from "../../reduxToolkit/FormDataSlice.jsx";
import { selectEducationData } from "../../reduxToolkit/FormDataSlice.jsx";

function TemplateD2() {
  const [count, setCount] = useState(0);
  const userInputData = useSelector(selectUserData);
  const userExperienceData = useSelector(selectExperienceData);
  const userEducationData = useSelector(selectEducationData);
  return (
    // <div className="w-[210mm] h-[297mm] bg-[white] border m-[10mm] border-solid border-[black] mt-[-150px] " style={{ transform: 'scale(1)' }}>
    <div
      className="w-[200mm] h-[297mm] lg:max-h-[297mm] bg-[white]   flex flex-row  border-[2px] border-[rgb(0 0 0)]  "
      style={{ transform: "scale(1)" }}
    >
      {/* <div className="w-[210mm] h-[1120px] lg:max-h-[1120px]  bg-[white]  relative flex flex-row  "> */}

      <div className="bg-[rgb(91,80,155)] w-[197mm] h-[60mm] absolute flex rounded-[250px_0_0_250px] left-[10px] top-[80px]">
        <div className="bg-[whitesmoke] w-[55mm] h-[55mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[50%] left-[16%] top-2/4"></div>
        <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[40%]">
          <div className="flex">
            <h1 className="text-[whitesmoke] text-[40px] font-[bold] Firstname">
              {userInputData && userInputData.firstName
                ? userInputData.firstName
                : "Devraj"}
            </h1>
            <h1 className="text-[whitesmoke] text-[40px] font-[bold] Lastname">
              {userInputData && userInputData["last-name"]
                ? userInputData["last-name"]
                : "Patil"}
            </h1>
          </div>
          <div className="text-[whitesmoke] text-[25px] font-extralight">
            <h3>
              {userExperienceData
                ? userExperienceData[userExperienceData.length - 1].Job_Title
                : "Full Stack Developer"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 text-[whitesmoke] text-[15px] font-extralight w-[200px] left-[90%] top-2/4">
          <p className="mt-[5px]">
            Email:{" "}
            {userInputData && userInputData["email-address"]
              ? userInputData["email-address"]
              : "abcd@cde.com"}
          </p>
          <p className="mt-[5px]">
            {" "}
            {userInputData && userInputData.address
              ? userInputData.address
              : "Address"}{" "}
            and{" "}
            {userInputData && userInputData.city ? userInputData.city : "City"}
          </p>{" "}
          {/*Here you should add address and city*/}
          <p className="mt-[5px]">
            {userInputData && userInputData["city-code"]
              ? userInputData["city-code"]
              : "City code"}
          </p>{" "}
          {/*Here you should add citycode*/}
          <p className="mt-[5px]">
            {userInputData && userInputData.state
              ? userInputData.state
              : "state"}{" "}
            and{" "}
            {userInputData && userInputData.country
              ? userInputData.country
              : "Country"}
          </p>{" "}
          {/*Here you should add state and country*/}
          {/* <p className='mt-[5px]'>Ph.no: 98745632100 </p> */}
        </div>
      </div>

      <div>
        <div className="bg-[rgb(91,80,155)] w-[120mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[28.5%] top-[37%]">
          <p className=" text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[75%] top-[10%] ml-[10px] mt-[10px]">
            Professional Experience
          </p>
          {/* <p className="text-[rgb(192,179,255)] text-1.5xl font-bold w-[400px] left-[105%] top-[%] ml-[30px] mt-[12px]">
            company name from to
          </p>{" "}
          {/*job title and company name to be added here*/}
          {/* <p className="text-[rgb(192,179,255)] text-1.5xl font-bold w-[400px] left-[105%] top-[%] ml-[30px] mt-[px]">
            Job title
          </p>{" "} */}

{userExperienceData && userExperienceData.length > 0 ? (
          <>
            {userExperienceData.map((exp, index) => (
              <div
                key={index}
                className="flex-col justify-start  exp-1 flex items-start w-[70%] gap-3 font-serif pt-2 lg:w-[100%]"
              >
                <div className="duration flex gap-x-2 ">
                  <h2>{exp.Job_Title}</h2>
                  <span className="text-gray-500">
                    {exp.Company_Name} | {exp.WrkStartDate} to {exp.WrkEndDate}
                  </span>
                </div>
                <div
                  className="text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: exp.description,
                  }}
                ></div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="exp-1 flex items-center px-6 w-[70%] gap-3 font-serif pt-2 lg:w-[100%]">
              <h2>{"Manager"}</h2>
              <div className="duration text-gray-500 ">
                {"XYZ company"} | {"Start Date - End Date"}
              </div>
            </div>
            <ul className="text-[15px] text-gray-500 lg:leading-[25px]">
              <li className="list-item">
                Implement effective company policies to ensure that all
                practices comply with labor and employment regulations
              </li>
              <li className="list-item">
                Increased employee retention rates by managing workplace
                satisfaction to an over 90% success rate by creating and
                maintaining a positive work environment
              </li>
              <li className="list-item">
                Develop targeted outreach practices to increase minority
                recruitment and ensure compliance with affirmative action
                policies
              </li>
              <li className="list-item">
                Monitor scheduled in and out times as well as employee breaks to
                ensure that proper employment laws are met
              </li>
            </ul>

            {/* <div className="exp-1 flex items-center w-[70%] gap-3 font-serif pt-2 lg:w-[100%]">
              <h2>{"Manager"}</h2>
              <div className="duration text-gray-500 ">
                {"XYZ company"} | {"Start Date - End Date"}
              </div>
            </div>
            <ul className="text-[15px] text-gray-500 lg:leading-[25px]">
              <li className="list-item">
                Implement effective company policies to ensure that all
                practices comply with labor and employment regulations
              </li>
              <li className="list-item">
                Increased employee retention rates by managing workplace
                satisfaction to an over 90% success rate by creating and
                maintaining a positive work environment
              </li>
              <li className="list-item">
                Develop targeted outreach practices to increase minority
                recruitment and ensure compliance with affirmative action
                policies
              </li>
              <li className="list-item">
                Monitor scheduled in and out times as well as employee breaks to
                ensure that proper employment laws are met
              </li>
            </ul> */}
          </>
        )}

          {/*job title here to be added here*/}
        </div>
        {/* <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 left-[22%] top-[54%]"> */}
          {/* <div className="flex flex-row justify-start items-center">
            <div className="ellipsething"></div>
            <p className="mt-[10px]">
              - Worked in Capgimini for 4 years, <br /> Plano, Human Resources
              Manager
            </p>
          </div> */}
          {/*Here you should add description*/}
          {/* <div className="flex flex-row justify-start items-center">
            <div className="ellipsething"></div>
            <p className="mt-[8px]">
              - Worked in Capgimini for 4 years, <br /> Plano, Human Resources
              Manager
            </p>
          </div> */}
          {/* <div className="flex flex-row justify-start items-center">
            <div className="ellipsething"></div>
            <p className="mt-[8px]">
              - Worked in Capgimini for 4 years, <br /> Plano, Human Resources
              Manager
            </p>
          </div> */}
          {/* <div className="flex flex-row justify-start items-center">
            <div className="ellipsething"></div>
            <p className="mt-[8px]">
              - Worked in Capgimini for 4 years, <br /> Plano, Human Resources
              Manager
            </p>
          </div> */}
        {/* </div> */}
      </div>
      <div className="bg-[rgb(91,80,155)] w-[80mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[30.%] top-[70%] ml-[151px]">
        <p className="text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[105%] top-[%] ml-[15px] mt-[10px]">
          Education
        </p>
        <br/>
        {/* <p className="text-[rgb(192,179,255)] text-1.5xl font-bold w-[400px] left-[105%] top-[%] ml-[15px] mt-[12px]">
          School name and location from 2004-2005
        </p>{" "} */}
        {/*School name and location to be added here*/}
        {/* <p className="text-[rgb(192,179,255)] text-1.5xl font-bold w-[400px] left-[105%] top-[%] ml-[15px] mt-[px]">
          B-Tech CSE
        </p>{" "} */}

{userEducationData && userEducationData.length > 0 ? (
          <>
            {userEducationData.map((edu, index) => (
              <div
                key={index}
                className="edu-1 flex-col justify-start  flex items-start px-4 w-[80%] gap-3 font-serif pt-2 lg:w-[100%]"
              >
                <div className="duration flex gap-x-2">
                  <h2>{edu.degree}</h2>
                  <span className="text-[15px] text-gray-500">
                    {edu.schoolName} | {edu.startDate} - {edu.endDate}
                  </span>
                </div>

                <div className="duration text-[15px] text-gray-500">
                  {edu.description}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>
            <div>
              <h2>{"Masters in Human Resources"}</h2>
              <div className="duration text-[15px] text-gray-500">
                {"The University of Texas, Dallas "} | {"Start Date"} -{" "}
                {"End Date"}
              </div>
            </div>
            <div>
              <h2>{"Masters in Human Resources"}</h2>
              <div className="duration text-[15px] text-gray-500">
                {"The University of Texas, Dallas "} | {"Start Date"} -{" "}
                {"End Date"}
              </div>
            </div>
          </div>
        )}


        {/*deggree added here to be added here*/}
      </div>
      {/* <div className="flex flex-row justify-start items-center absolute -translate-x-2/4 -translate-y-2/4 text-[15px] font-extralight w-[400px] text-[rgb(60,60,60)] left-[32%] top-[83%]">
        <ul>
          <li className="list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5">
            Studied from Harward university
          </li>
          <li className="list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5">
            Studied from Harward university
          </li>
          <li className="list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5">
            Studied from Harward university
          </li>
          <li className="list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5">
            Studied from Harward university
          </li>
        </ul>
      </div> */}

      {/* Adding additional sections based on userData */}
      {/* Projects */}
      {/* {userInputData && userInputData.projects ? (
        <>
           <div className="bg-[rgb(91,80,155)] w-[80mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[30.%] top-[70%] ml-[151px]">
    <p className='text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[105%] top-[%] ml-[15px] mt-[10px]'>Projects</p>
    </div>
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
        ) : null} */}

      <div className="flex flex-row">
        <div className="bg-[rgb(244,245,244)] w-[65%] h-[297mm]">
          <div className="absolute -translate-x-2/4 -translate-y-2/4 text-lg font-[bold] w-[210px] text-[rgb(90,80,154)] text-justify w-60 left-[82.5%] top-[52%]">
            {userInputData && userInputData.description ? (
              userInputData.description
            ) : (
              <p>
                Human resources generalist with 8 years of experience in HR,
                including hiring and terminating, disciplining employees and
                helping department managers improve employee performance. Worked
                with labor unions to negotiate compensation packages for
                workers. Organized new hire training initiatives as well as
                ongoing training to adhere to workplace safety standards. Worked
                with OSHA to ensure that all safety regulations are followed.
              </p>
            )}
          </div>

          <div className="absolute -translate-x-2/4 -translate-y-2/4 text-lg font-[bold] w-[400px] text-[rgb(90,80,154)] text-justify w-60 left-[96%] top-[90%]">
            <h2 className="text-[25px]">Skills</h2>
            <ul className="list-disc text-lg font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="bg-[rgb(234,230,254)] w-[35%]"></div>
      </div>
    </div>
  );
}

export default TemplateD2;
