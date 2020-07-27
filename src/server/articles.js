const Axios = require('axios');

exports.getArticlesWithTags = async (req, res) => {
  try {
    const { data } = await Axios.get(
      'https://api-test-ln.herokuapp.com/articles'
    );
    if (!data) {
      return res.status(400).json({ message: 'Articles not found' });
    }
    const orderedTopTags = getOrderedTopTags(data);
    return res.status(200).json({ articles: data.articles, orderedTopTags });
  } catch (err) {
    return console.log(err);
  }
};

const getOrderedTopTags = ({ articles }) => {
  let tags = {};
  articles.forEach(item => {
    item.taxonomy.tags.map(tag => {
      if (!tags.hasOwnProperty(tag.slug)) {
        tags[tag.slug] = { count: 1, name: tag.text };
      } else {
        tags[tag.slug] = {
          ...tags[tag.slug],
          count: tags[tag.slug].count + 1,
        };
      }
    });
  });
  let sorted = Object.entries(tags).sort((a, b) => b[1].count - a[1].count);
  return sorted.slice(0, 10);
};
