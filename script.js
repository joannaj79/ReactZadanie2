

var Movie = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
img: 'https://bi.im-g.pl/im/91/1a/17/z24224401Q,Harry-Potter-i-Czara-Ognia.jpg',
    desc: 'Film o czarodzieju'
  },
  {
    id: 2,
    title: 'Król Lew',
img: 'https://bi.im-g.pl/im/72/d4/17/z24987506V,Piesn-o-milosci--z-filmu--Krol-Lew--Audio-Only-.jpg',
    desc: 'Film o królu sawanny'
  },
	{
id:3,
title: 'Shrek',
img: 'http://cdn1.thumbs.common.smcloud.net/common/2/4/s/24688590H9z.jpg/ru-1-r-640,0-n-24688590H9z.jpg',
desc: 'Film o ogrze'
}
];
var style= {
height: '200px',
width: '200px'
};
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('img', {src:movie.img,style:style}),
      React.createElement('p', {}, movie.desc)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));

