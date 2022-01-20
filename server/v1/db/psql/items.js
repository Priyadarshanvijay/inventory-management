import { Items as BaseItems } from '../items.js';

export class Items extends BaseItems {
  findOneById(id) {
    return this.db({ i: this.name }).where('i.id', id)
      .leftOuterJoin({ s: 'stock' }, 'i.id', '=', 's.item_id')
      .join({ c: 'categories' }, 'c.id', '=', 'i.category_id')
      .join({ co: 'companies' }, 'co.id', '=', 's.supplier_id')
      .join({ co1: 'companies' }, 'co1.id', '=', 's.manufacturer_id')
      .select(
        'i.id',
        's.id AS stock_id',
        'i.item_name',
        'i.image',
        'c.category_name',
        'co.company_name AS supplier_name',
        'co1.company_name AS manufacturer_name',
        'co.city AS supplier_city',
        'co1.city AS manufacturer_city',
        's.incoming_quantity',
        's.current_quantity',
        's.supply_date',
        's.stock_over_date'
      );
  }

  findAll(limit = 10, offset = 0) {
    return this.db.from({ i: this.name })
      .leftOuterJoin({ s: 'stock' }, 'i.id', '=', 's.item_id')
      .join({ c: 'categories' }, 'c.id', '=', 'i.category_id')
      .select(
        'i.id',
        'i.item_name',
        'i.image',
        'c.category_name'
      )
      .sum('s.current_quantity as available')
      .groupByRaw(
        'i.id, i.item_name, i.image, c.category_name'
      )
      .limit(limit)
      .offset(offset);
  }

  deleteOneById(id) {
    return this.db(this.name).where({ id }).del();
  }

  updateById({
    id,
    itemName = undefined,
    image = undefined,
    categoryId = undefined
  }) {
    if (!id) throw Error('Undefined ID supplied to DB Update function');
    return this.db(this.name)
      .where({ id })
      .update(
        JSON.parse(JSON.stringify({
          item_name: itemName,
          image,
          category_id: categoryId
        })),
        ['id']
      );
  }

  constructor({ db }) {
    super();
    this.name = 'items';
    this.db = db;
  }
}
export default Items;
