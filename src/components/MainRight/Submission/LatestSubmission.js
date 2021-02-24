import { Fragment, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { RiCloseFill } from "react-icons/ri";
import { IoCloudUploadSharp } from "react-icons/io5";
import RectangleSpinner from "../../Loader/RectangleSpinner";

const SubmissionLatest = ({ isCodeSubmitting, submission }) => {
  const [error] = useState(submission?.error);
  const [result] = useState(submission?.testResult);

  if (isCodeSubmitting) return <RectangleSpinner text="Submitting" />;

  return (
    <div className="pb-6 mb-6 text-xs h-1/3 overflow-y-auto">
      {!submission && (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="icon-accent text-6xl">
            <IoCloudUploadSharp />{" "}
          </div>
          <div className="text-lg text-accent font-extralight text-center">
            Your latest submission shall appear here...
          </div>
        </div>
      )}
      {error && (
        <div className="text-red-600 flex flex-col ">
          <div className="text-xl pb-4">{error.name || "Error"}</div>
          <div className="border bg-red-100 overflow-y-scroll h-24 p-2 rounded-sm">
            {error.stack || error.message || error}
          </div>
        </div>
      )}
      {result && (
        <div className="flex flex-col gap-y-1">
          <div className=" flex gap-x-4 h-10 bg-gradient-to-r from-purple-400 to-purple-500 text-white items-center mb-2 px-2 rounded-sm">
            <div className="flex gap-x-2">
              <div className="font-semibold">Time Taken:</div>
              <div className="font-light">
                {Math.round(submission?.timeTaken * 1000) / 1000 || "NA"}
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="font-semibold">Word Count:</div>
              <div className="font-light">{submission?.wordCount || "NA"}</div>
            </div>
            <div className="flex gap-x-2">
              <div className="font-semibold">Rank:</div>
              <div className="font-light">
                {submission?.ranked ? "Yes" : "No"}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 border-t border-r border-l">
            <div className=" text-gray-600 p-2 border bg-purple-100">
              {" "}
              Argument
            </div>
            <div className=" text-gray-600 p-2 border bg-purple-100">
              Expected
            </div>
            <div className=" text-gray-600 p-2 border bg-purple-100">
              {" "}
              ReturnVal
            </div>
            <div className="text-gray-600 p-2 border bg-purple-100">Passed</div>
            {result &&
              result.map((testCase, i) => {
                return (
                  <Fragment key={i}>
                    <div className="col-span-1 border-b p-2">
                      {testCase.arguments}
                    </div>
                    <div className="col-span-1 border-b p-2">
                      {testCase.expectedOutput}
                    </div>
                    <div className="col-span-1 border-b  p-2">
                      {testCase.returnVal}
                    </div>
                    <div className="col-span-1 border-b p-2">
                      {testCase.passed ? (
                        <FcCheckmark className="text-green-600" />
                      ) : (
                        <RiCloseFill className="text-red-600" />
                      )}
                    </div>
                  </Fragment>
                );
              })}
          </div>
          {/* {submission?.code && (
            <button className="flex justify-end" type="basic" size="xs">
              <div
                className="flex gap-x-1 items-center "
                onClick={() =>
                  modalDispatch({ type: "SHOW_CODE", payload: submission.code })
                }
              >
                <div className="font-semibold"> See Code</div>{" "}
                <Icon type="Eye" />
              </div>
            </button>
          )} */}
        </div>
      )}
    </div>
  );
};

export default SubmissionLatest;
