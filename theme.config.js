// theme.config.js
export default {
  repository: "https://github.com/shuding/nextra", // project repo
  docsRepository: "https://github.com/shuding/nextra", // docs repo
  branch: "master", // branch of docs
  path: "/", // path of docs
  titleSuffix: " – 情報収集",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: "2021 - 作ったもん見せ部",
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <svg>...</svg>
      <span>FeedlyとNotionで情報収集</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
};
