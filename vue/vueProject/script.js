// var app = new Vue({
//   el: '#app',
//   data: {
//     todos: [
//       { text: 'Learn Javascript' },
//       { text: 'Learn Vue' },
//       { text: 'App1' },
//       { text: 'App2' }
//     ]
//   }
// });

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue'
//   },
//   methods: {
//     reverseMessage: function() {
//       this.message = this.message
//         .split('')
//         .reverse('')
//         .join('');
//     }
//   }
// });

var app = new Vue({
  el: '#app',
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v/bpi/currentprice.json')
      .then(response => (this.info = response));
  }
});
