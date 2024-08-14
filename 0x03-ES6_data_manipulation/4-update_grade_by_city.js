export default function updateStudentGradeByCity(array, city, newgrades) {
  return array
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newgrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
