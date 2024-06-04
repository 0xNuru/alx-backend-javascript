export default function getStudentIdsSum(studentsObj) {
  let initial_value = 0;
  return studentsObj.reduce((sum, student) => sum + student.id, initial_value);
}
