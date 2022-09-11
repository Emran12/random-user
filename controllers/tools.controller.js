tools = [
  { id: 1, name: "hammer" },
  { id: 2, name: "hammer2" },
  { id: 3, name: "hammer2" },
];

module.exports.getAllTools = (req, res) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  res.json(tools.slice(0, limit));
};

module.exports.getToolDetail = (req, res) => {
  const { id } = req.params;
  const foundTool = tools.find((tool) => tool.id === Number(id));

  res.send(foundTool);
};

module.exports.saveATool = (req, res) => {
  const tool = req.body;
  tools.push(tool);
  res.send(tools);
};

module.exports.updateTool = (req, res) => {
  const { id } = req.params;
  const newData = tools.find((tool) => tool.id === Number(id));
  newData.id = id;
  newData.name = req.body.name;
  res.send(newData);
};

module.exports.deleteTool = (req, res) => {
  const { id } = req.params;
  const result = tools.filter((tool) => tool.id !== Number(id));
  res.json(result);
};
