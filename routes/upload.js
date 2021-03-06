var express = require('express');
var router = express.Router();

const handleErrorAsync = require('../service/handleErrorAsync');
const uploadControllers = require('../controllers/upload');
const { isAuth } = require('../middleware/auth');
const { uploadImg } = require('../middleware/upload');
const { uploadLimiter } = require('../middleware/rateLimit');

router.post('/upload/imgur', isAuth, uploadLimiter, uploadImg, handleErrorAsync(async (req, res, next) => {
  /**
   * #swagger.tags = ['Upload']
   * #swagger.summary = 'Upload file to imgur'
   * #swagger.security = [{
      "apiKeyAuth": []
    }]
   */

  uploadControllers.uploadImgur(req, res, next);
}));

module.exports = router;