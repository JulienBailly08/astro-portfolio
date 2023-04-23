import Article, { ArticleType } from "./Article";


const datas =
  [{
    title: 'blablabla',
    categories: [
      'js','php','sql','niet'
    ],
    link: 'https://julienbailly.ddns.net',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  ]

const Blog = () => {
  console.log(datas)
  return (
    <div class="medium-articles h-full">
      {datas.map((article: ArticleType) => (
        <Article article={article} />
      ))}
    </div>
  );
};

export default Blog;
