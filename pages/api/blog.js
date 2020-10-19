
import data from '../../blog.json'

export default (req, res) => {
    res.statusCode = 200
    res.json(data);
  }
  