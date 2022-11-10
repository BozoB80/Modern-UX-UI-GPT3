import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Feb 04, 2022" text="In order to understand the concept, explain what it is!" />
        <Article imgUrl={blog03} date="Apr 17, 2022" text="We are live and showcasing the beauty of GPT-3." />
        <Article imgUrl={blog04} date="Jun 22, 2022" text="Be the first to test our newest features!" />
        <Article imgUrl={blog05} date="Nov 10, 2022" text="How we made a big impact on the world's economy?" />
      </div>
    </div>
  </div>
);

export default Blog;
