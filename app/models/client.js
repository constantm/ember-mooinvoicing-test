import DS from 'ember-data';

export default DS.Model.extend({
  clientName: DS.attr('string'),
	clientEmail: DS.attr('string')
});

// client.reopen(function(){
// 	validations: {
//     clientName: {
//       presence: true,
//       length: { minimum: 5 }
//     },
//     clientEmail: {
//       presence: true,
//       length: { minimum: 5 }
//     }
//   }
// })
// export default DS.Model.extend({
//     clientName: DS.attr('string'),
//   	clientEmail: DS.attr('string')
// });