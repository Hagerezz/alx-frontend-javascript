export default function updateStudentGradeByCity(array, city, newgrades) {
  return array.filter((student) => student.location === city).map((student) => {
    const studentGrade = newgrades.find((grade) => grade.studentId === student.id);
    return {
      ...array,
      grade: studentGrade ? studentGrade.grade : 'N/a',
    };
  });
}
