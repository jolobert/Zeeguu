function multipleAuthors(authors_str) {
  return authors_str.split(",").length > 1;
}

export default function ArticleAuthors({ articleInfo }) {
  return (
    <div>
      <div>
        {articleInfo.authors &&
          "Author" +
            (multipleAuthors(articleInfo.authors) ? "s" : "") +
            ": "}{" "}
        <b>{articleInfo.authors}</b>
      </div>
      <br />
    </div>
  );
}