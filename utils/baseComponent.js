export default class BaseComponent {
  constructor() {
    this.idList = [
      'restaurant_id',
      'food_id',
      'order_id',
      'user_id',
      'address_id',
      'cart_id',
      'img_id',
      'category_id',
      'item_id',
      'sku_id',
      'admin_id',
      'statis_id',
    ]
    this.imgTypeList = ['shop', 'food', 'avatar', 'default']
    this.uploadImg = this.uploadImg.bind(this)
    this.qiniu = this.qiniu.bind(this)
  }
}
