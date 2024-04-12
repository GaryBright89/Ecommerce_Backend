const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

router.get('/:id', async(req, res) => {
  const category = await Category.findbyPk(req.params.id);
  res.json(category);
});

router.post('/', async(req, res) => {
  const newCategory = await Category.create.update(req.body,)
  res.json(newCategory);
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updateCategory);
});

router.delete('/:id', async(req, res) => {
  const deleteCategory = await Category.destroy({
    where: { id: req.params.id }
  });
  res.json(deleteCategory);
});

module.exports = router;
