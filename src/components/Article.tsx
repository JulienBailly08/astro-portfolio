export type ArticleType = {
  link: string;
  title: string;
  categories: string[];
  description: string;
}

type Props = {
  article: ArticleType;
}

const Article = ({article}: Props) => {
  const {link, title, categories, description} = article;
  return (
    <div
      class="flex relative shadow-box-up dark:shadow-buttons-box-dark rounded-lg p-3 mb-3"
    >
      <a class="absolute w-full h-full left-0" target="_black" href={link}></a>
      <div class="flex flex-col">
        <h3 class="text-xxs 2xl:text-xs items-baseline font-bold capitalize text-light-blue-dark dark:text-dark-blue-light">
          {title}
          <div class="flex my-auto">
            {categories
              .map((category) => (
                <span class="text-4xs lg:text-3xs font-thin text-light-blue-dark dark:text-dark-blue-light py-1 px-2 mr-1 my-1 rounded-lg last-of-type:mr-0 shadow-box-up dark:shadow-buttons-box-dark bg-gradient-box-light h-min w-fit dark:bg-gradient-box-dark border border-light-blue-dark dark:border-light-blue-light">
                  {category}
                </span>
              ))}
          </div>
        </h3>
        <p class="text-xxs font-thin text-light-blue-dark dark:text-dark-blue-light mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Article;
