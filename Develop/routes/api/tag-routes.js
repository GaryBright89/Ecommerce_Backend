const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{model: Product, through: ProductTag}]
    });
    res.json(tags);
  }catch(err){ console.log('error')}
});

router.get('/:id', async(req, res) => {
  const tag = await Tag.findByPk(req.params.id, {
    include: [{model: Product, through: ProductTag}]
  });
  res.json(tag);
});

router.post('/', async(req, res) => {
  const newTag = await Tag.create(req.body);
  res.json(newTag);
});

router.put('/:id', async(req, res) => {
  const updateTag = await Tag.update(req.body, {
    where: {id: req.params.id}
  })
  res.json(updateTag);
});

router.delete('/:id', async(req, res) => {
  const deleteTag = await Tag.destroy({where: {id: req.params.id}});
  res.json(deleteTag);
});

module.exports = router;
