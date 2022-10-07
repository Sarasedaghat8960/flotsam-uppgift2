import {
  Assignment,
  expectedResultObject,
  getAllAssignments,
} from "./assignmentClient";

interface IResult extends Assignment {
  tag: string;
}

type XYType = {
  X: IResult[];
  Y: IResult[];
  Z: IResult[];
};
describe("display a list of all the assignment with username and number of assignments per user", () => {
  it("should be sorted on by username and assignment id", async () => {
    const result = await getAllAssignments();

    const resultWithTag = result as IResult[];
    const newResult = resultWithTag.reduce(
      (preResult: XYType, curResult) => {
        //Check if X exist in tag
        if (curResult.tag.includes("X")) {
          preResult.X.push(curResult);
        }
        //Check if Y exist in tag

        if (curResult.tag.includes("Y")) {
          preResult.Y.push(curResult);
        }
        //Check if Y exist in tag

        if (curResult.tag.includes("Z")) {
          preResult.Z.push(curResult);
        }
        //Sort each array by id
        preResult.X.sort((a: any, b: any) => Number(a.id) - Number(b.id));
        preResult.Y.sort((a: any, b: any) => Number(a.id) - Number(b.id));
        preResult.Z.sort((a: any, b: any) => Number(a.id) - Number(b.id));
        //console.log("preResult", preResult);
        return { ...preResult };
      },
      { X: [], Y: [], Z: [] }
    );
    console.log("New Result", newResult);
    // Assert
    expect(newResult).toEqual(expectedResultObject);
  });
});
