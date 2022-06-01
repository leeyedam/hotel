// fake data
import places from '../../../utils/data/places';

export default (req, res) => {
  const {
    query: { pid },
  } = req

  const place = places.find(x => x.id === pid);
  res.status(200).json(place);
}
