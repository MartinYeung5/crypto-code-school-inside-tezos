// import React from 'react';
// import { TiTick } from 'react-icons/ti';
// import { AiOutlineQuestion } from 'react-icons/ai';
// import { checkCode } from '../../../utils/compiler';
// import {
//   ContractFile,
//   Editor,
//   Option,
//   ShowAnswerButton,
//   CheckAnswerButton,
//   RunCodeButton
// } from './styled';
// import { useMediaQuery } from 'react-responsive';
// import RefreshSVG from '../../../assets/refresh.svg';
// import { Check, ShowAnswer, Code } from '../../../components/IconSet';
// import ReactTooltip from 'react-tooltip';

// interface Props {
//   children: React.ReactNode;
//   setShowOutput(input: boolean): void;
//   setButtonClicked(input: boolean): void;
//   setEditorHeight(input: string): void;
//   resetEditor(): void;
//   chapterCompletedSuccessfully: boolean;
//   chapterIndex: {
//     current: number;
//     total: number;
//     nextSlug: string | undefined;
//     prevSlug: string | undefined;
//   };
//   updateValidation(input: string): void;
//   editorInputValue: string;
//   currentLesson: string;
//   runCode(): void;
// }

// function ChapterEditor({
//   children,
//   setShowOutput,
//   setButtonClicked,
//   setEditorHeight,
//   chapterIndex,
//   updateValidation,
//   editorInputValue,
//   resetEditor,
//   chapterCompletedSuccessfully,
//   chapterSolution,
//   currentLesson,
//   runCode
// }: Props) {
//   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

//   return (
//     <>
//       <ReactTooltip place="left" type="light" effect="solid" />
//       <ContractFile>
//       <p>{
//         currentLesson === "lesson-4"?
//         "Live Editor"
//         :
//         "Contract.py"
//         }</p>
//         {!chapterCompletedSuccessfully ? (
//           currentLesson === "lesson-4" ? null :
//           <span data-tip="Reset Editor Content" onClick={() => resetEditor()}>
//             <RefreshSVG />
//           </span>
//         ) : null}
//       </ContractFile>
//       <Editor>{children}</Editor>
//       <Option>
//         <ShowAnswerButton
//           onClick={() => {
//             setShowOutput(true);
//             setButtonClicked(true);
//             // setEditorHeight(
//             //   `${
//             //     isMobile
//             //       ? `calc(100vh - (130px)) `
//             //       : `calc(100vh - (250px + 200px + 40px))`
//             //   }`,
//             // );
//           }}
//         >
//           <ShowAnswer /> <span>Show Answer</span>
//         </ShowAnswerButton>
//         {currentLesson !== "lesson-4"?
//           <CheckAnswerButton
//             onClick={() => {
//               setShowOutput(false);
//               setButtonClicked(true);
//               // setEditorHeight(
//               //   `${
//               //     isMobile
//               //       ? `calc(100vh - (130px)) `
//               //       : `calc(100vh - (250px + 200px + 40px))`
//               //   }`,
//               // );
//               const result = checkCode(editorInputValue, chapterSolution);
//               // console.log('result', result);
//               updateValidation(result);
//             }}
//           >
//             <Check /> <span>Check</span>
//           </CheckAnswerButton>
//         : null }

//         {currentLesson === "lesson-4"?
//           (<RunCodeButton
//             onClick={() => {
//               setShowOutput(false);
//               setButtonClicked(true);
//               runCode();
//             }}
//           >
//             <Code/> <span>Run Code</span>
//           </RunCodeButton>): null
//         }
//       </Option>
//     </>
//   );
// }

// export default ChapterEditor;

import React from 'react';
import {
  ContractFile,
  Editor,
  Option,
  ShowAnswerButton,
  CheckAnswerButton,
} from './styled';
import { Code, ShowAnswer } from '../../../components/IconSet';

function ChapterEditor({ children, setShowOutput, setButtonClicked, runCode }) {
  return (
    <>
      <ContractFile>
        <p>Live Editor</p>
      </ContractFile>
      <Editor>{children}</Editor>
      <Option>
        <ShowAnswerButton
          onClick={() => {
            setShowOutput(true);
            setButtonClicked(true);
          }}
        >
          <ShowAnswer /> <span>Show Answer</span>
        </ShowAnswerButton>
        <CheckAnswerButton
          onClick={() => {
            setShowOutput(false);
            setButtonClicked(true);
            runCode();
          }}
        >
          <Code /> <span>Run Code</span>
        </CheckAnswerButton>
      </Option>
    </>
  );
}

export default ChapterEditor;
