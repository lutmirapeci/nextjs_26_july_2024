// data
import expressions from "../../data/expressions.json";

export default function handler(req, res) {
  res.status(200).json(expressions);
}
