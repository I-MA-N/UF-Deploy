import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import MultipleChoiceInput from "../../../common/inputs/MultipleChoiceInput";
import ChoiceInput from "../../../common/inputs/ChoiceInput";
import ImageInput from "../../../common/inputs/ImageInput";
import ChoiceImage from "../../../common/inputs/ChoiceImage";

export type testPatternTypes = "MultipleChoice" | "Choice" | "ChoiceWithDivide" | "Radio" | "Text" | "ImageWithDivide" | "ChoiceImage";

type generateTestsInputsPropsType = {
   context: any,
   testTitle: string,
   testPattern: testPatternTypes,
   testData: any,
   register: UseFormRegister<FieldValues>,
   setValue: UseFormSetValue<FieldValues>,
}

function generateTestsInputs({ context, testTitle, testPattern, testData, register, setValue }: generateTestsInputsPropsType) {
   const contextData = context[testTitle as keyof typeof context];

   switch (testPattern) {
      case "MultipleChoice":
         return testData.map((title: string, index: number) => {
            const defaultValue = contextData?.[title as keyof typeof contextData];
            return <MultipleChoiceInput
               key={title}
               register={register}
               title={title}
               defaultValue={defaultValue}
               index={index + 1}
            />
         })

      case "Choice":
         return testData.map((input: any, index: number) => {
            const defaultValue = contextData?.[input.title as keyof typeof contextData];

            const defaultValueIndex = input.keys.indexOf(defaultValue);

            return <ChoiceInput
               key={input.title}
               register={register}
               setValue={setValue}
               title={input.title}
               keys={input.keys}
               values={input.values}
               index={index + 1}
               defaultValue={defaultValueIndex === -1 ? 0 : defaultValueIndex}
            />
         })

      case "ChoiceWithDivide":
         return testData.map((section: any) => (
            <div>
               <h3 className="mb-3 text-center">{section.sectionTitle}</h3>
               <div className="flex gap-x-8 gap-y-4 items-center justify-center flex-wrap">
                  {
                     section.sectionQuestions.map((input: any) => {
                        const defaultValue = contextData?.[input.title as keyof typeof contextData];

                        const defaultValueIndex = input.keys.indexOf(defaultValue);
                        return <ChoiceInput
                           key={input.title}
                           register={register}
                           setValue={setValue}
                           title={input.title}
                           keys={input.keys}
                           values={input.values}
                           index={input.id}
                           defaultValue={defaultValueIndex === -1 ? 0 : defaultValueIndex}
                        />
                     })
                  }
               </div>
            </div>
         ))

      case "Radio":
         const setDefaultChecked = (choiceId: number) => {
            if (contextData?.["مقدار تحرک"]) {
               return contextData?.["مقدار تحرک"] == choiceId ? true : false
            } else {
               return choiceId === 1 ? true : false
            }
         }
         return testData.map((choice: any) => (
            <label key={choice.text1} htmlFor={choice.text1} className="flex items-center gap-1 text-sm/6">
               <p>
                  <span className="font-Estedad-Black">{choice.text1}: </span>
                  <span>{choice.text2}</span>
               </p>
               <input type="radio" {...register('مقدار تحرک')} defaultChecked={setDefaultChecked(choice.id)} id={choice.text1} value={choice.id} />
            </label>
         ))

      case "Text":
         return Object.entries(testData).map(txt => (
            <div key={txt[0]} className="flex flex-col items-center w-[125px]">
               <label htmlFor={txt[0]} className="text-sm">{txt[0]}</label>
               <input
                  dir="ltr"
                  className="custom-input text-center placeholder:text-center w-full"
                  type="number"
                  defaultValue={contextData?.[txt[0] as keyof typeof contextData] || ''}
                  id={txt[0]}
                  placeholder={txt[1] as string}
                  {...register(txt[0])}
               />
            </div>
         ))

      case "ImageWithDivide":
         return testData.map((section: any) => (
            <div className="py-4">
               <h3 className="mb-6 text-center">{section.sectionTitle}</h3>
               <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap">
                  {
                     section.sectionQuestions.map((image: any) => (
                        <ImageInput
                           key={image.id}
                           title={image.text}
                           image={image.src}
                           direction={image.direction === 'vertical' ? "vertical" : "horizental"}
                           register={register}
                           setValue={setValue}
                           defaultValue={contextData?.[image.text as keyof typeof contextData] || 0}
                        />
                     ))
                  }
               </div>
            </div>
         ))

      case "ChoiceImage":
         return testData.map((input: any) => {
            const defaultValue = contextData?.[input.title as keyof typeof contextData];

            const defaultValueIndex = input.keys.indexOf(defaultValue);
            return <ChoiceImage
               key={input.title}
               register={register}
               setValue={setValue}
               title={input.title}
               imgAddress={input.imgAddress}
               imgSize={input.imgSize}
               keys={input.keys}
               values={input.values}
               index={input.id}
               defaultValue={defaultValueIndex === -1 ? 0 : defaultValueIndex}
            />
         })

      default:
         return ["تست مورد نظر یافت نشد!"];
   }
}

export default generateTestsInputs