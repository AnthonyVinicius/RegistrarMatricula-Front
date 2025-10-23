import GenericDAO from "./GenericDAO";

class CourseDAO extends GenericDAO {
  constructor() {
    super("/course");
  }
}

export default new CourseDAO();
