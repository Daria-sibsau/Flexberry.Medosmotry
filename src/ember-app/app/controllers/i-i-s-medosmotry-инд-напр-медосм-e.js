import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-medosmotry-инд-напр-медосм-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-medosmotry-вредн-факт-произ+классВредФактор':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'вредныйФактор',
            required: true,
            relationName: 'классВредФактор',
            projection: 'КлассВредФакторL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
