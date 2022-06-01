// fake data
import facilities from '../../../utils/data/facilities';

export default (req, res) => {
  const {
    query: { pid },
  } = req

  const facility = facilities.find(x => x.id === pid);
  res.status(200).json(facility);
}
