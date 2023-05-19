import React from "react";
import PageTittle from "../../components/PageTittle";
import Blog from "../../components/Blog";

const Article = () => {
  return (
    <section>
      <PageTittle title="Blog" subtitle="Stay Tune"></PageTittle>
      <div className="row g-3">
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
      </div>
    </section>
  );
};

export default Article;
