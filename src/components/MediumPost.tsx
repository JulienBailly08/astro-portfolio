import Article, { ArticleType } from "./Article";


const datas =
  [
    {
      title: 'La Nimes\'Alerie',
      categories: [
        'Symfony','Bootstrap','API platform'
      ],
      link: 'https://julienbailly.ddns.net/lanimesalerie',
      description: 'Projet de fin de formation : réalisation d\'un site E-commerce',
    },
    {
      title: 'Dashboard du site e-commerce',
      categories: [
        'Angular','Bootstrap','Highcharts'
      ],
      link: 'https://julienbailly.ddns.net/dashboard',
      description: 'Collecte des données depuis l\'API, mise en place de filtres et affichage de graphiques',
    },
    {
      title: 'CRUD Angular',
      categories: [
        'Angular','Bootstrap','RXJS'
      ],
      link: 'https://julienbailly.ddns.net/playground',
      description: 'Partie front adaptée d\'un projet construit avec NestJS et MongoDB',
    },
  ]

const Blog = () => {
  return (
    <div class="medium-articles h-full">
      {datas.map((article: ArticleType) => (
        <Article article={article} />
      ))}
    </div>
  );
};

export default Blog;
