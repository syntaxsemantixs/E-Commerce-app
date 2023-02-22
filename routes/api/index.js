const router = require('express').Router();
const travellerRoutes = require('./category-routes');
const locationRoutes = require('./product-routes');
const tripRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
