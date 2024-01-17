import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-medosmotry-список-на-медосм-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-medosmotry-контингент-сотр+подразделение':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'подразделение',
            projection: 'ПодразделениеL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-medosmotry-контингент-сотр+классВредФактор':
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

        case 'i-i-s-medosmotry-контингент-сотр+приказМЗР':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номерПункта',
            required: true,
            relationName: 'приказМЗР',
            projection: 'ПриказМЗРL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
