import authorId from './helpers/author-id';

export default authorId([
  // {
  //   username: '' // twitter name of author. if author has no twitter - use underhood name
  //   first: '',  # id of first tweet
  //   post: false # Include only for author that hasn't finished his week yet. Will display link to twitter instead of archive
  //   extUrl: 'https://some.url/insteadOfTwitter' # Include only for author that doesn't have twitter. Will display link to this page instead of personal twitter
  // },
  { username: 'tululu', start: '5 Jul 2021', first: '1412041455732932615', extUrl: 'https://t.me/tululu' },
  { username: 'giorgobiany', start: '27 Jun 2021', first: '1409435766963441665', extUrl: 'https://t.me/giorgobiany' },
  { username: 'pujapuja191', start: '23 Nov 2020', first: '1330859423842111491' },
  { username: 'luisarr', start: '16 Nov 2020', first: '1328237241425145856' },
  { username: 'ryababukha', start: '9 Nov 2020', first: '1325741303087378434' },
  { username: 'ulanKZ', start: '2 Nov 2020', first: '1323206520784506881' },
  { username: 'khramushinaa', start: '19 Oct 2020', first: '1318143663025827840' },
  { username: 'NatashaKatson', start: '1 Oct 2020', first: '1311739136601186306' },
]);
