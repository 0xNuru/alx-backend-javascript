export default function getStudentsByLocation(studentsObj, location) {
  return studentsObj.filter((student) => student.location === location);
}
