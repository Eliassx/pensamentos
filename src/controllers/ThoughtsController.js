const Thoughts = require('../model/Thoughts');

module.exports = {
  async dashboard(request, response) {
    return response.render('thoughts/dashboard')
  },
  
  async createThoughts(request, response) {
    const { title, description } = request.body;

    const thought = await Thoughts.create({
        title,
        description,
    });

    return response.json(thought);
  },
  async findThoughts(request, response) {
    const thoughts = await Thoughts.findAll({ raw: true });

    return response.json(thoughts);
  },
  async findOneThought(request, response) {
    const { id } = request.params;

    const thought = await Thoughts.findByPk(id);

    return response.json(thought);
  },
  async updateThought(request, response) {
    const { id } = request.params;
    const { title, description } = request.body;
    
    const updateThought = await Thoughts.update(
      {
        title,
        description,
      },
      {
        where: { id }
      }
    )

    return response.json({ message: "Updated Thoughts!" });
  },
  async deleteThoughts(request, response) {
    const { id } = request.params;

    const deleteThoughts = await Thoughts.destroy({ where: { id } });

    return response.json({ message: "Deleted Thoughts!" })
  }
}