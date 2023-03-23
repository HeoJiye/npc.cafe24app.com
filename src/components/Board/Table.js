import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { readUser } from '../../actions/user';

import Nav from './Nav';

import styles from '../../css/Forum/Forum.module.css';

const Top = () => {
  return (
    <div className={styles.top}>
        {[ '번호', '분류', '제목', '작성자', '첨부파일', '작성일' ].map((e)=><div>{e}</div>)}
    </div>
  );
}

const Cell = ({ post }) => {
  return (
    <Link to={"/post/"+post.post_id}>
      <div className={styles.important}>
        <div className={styles.star}>
          <img src="/Forum/star.png"/> 
        </div>
        <div>{post.post_id}</div>
        <div>{post.range}</div>
        <div>{post.title}</div>
        <div>{readUser(post.userno).nickname}</div>
        <div className={styles.attachment}>
          <img src="/Forum/attachment.png"/>
        </div>
        <div>{post.create_date}</div>
      </div>
    </Link>
  )
}

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
        postList: this.props.postList,
        curPage: 1,
    }
  }

  getPostList = () => {
    const start = 10 * (this.state.curPage - 1);
    const end = Math.min(start + 11, this.state.postList.length);
    return this.state.postList.slice(start, end);
  }
  
  changePage = (page) => {
    if(page > 0 && page < Math.ceil(this.state.postList.length / 10)+1) {
      this.setState({
        ... this.state,
        curPage: page,
      })
    }

  }

  render() {
    return (
        <div className={styles.table}>
            <Top/>
            <div className={styles.list}>
              { this.getPostList().map((e) => <Cell post={e}/>) } 
            </div>
            <Nav 
            changePage={this.changePage}
            curPage={this.state.curPage} totalPage={Math.ceil(this.state.postList.length / 10)}></Nav>
        </div>
    );
  }
}

export default Table;
