import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';

import { getBName } from '../actions/board';
import { readPost } from '../actions/post';

import PostEdit from '../components/Post/PostEdit';

import styles from '../css/Post/Post.module.css';

const Controller = () => {
    return (
        <NewPost params={useParams().bid}/>
    );
};

class NewPost extends Component {
    constructor(props) {
        super(props);
        const board_id = props.params;
        
        this.state = {
            board_id: board_id,
        };
    }

    changeEdit = () => {
        this.setState({
            ... this.state,
            edit: !this.state.edit
        });
    }

    render() {
        return (
            <div className={styles.Post}>
                <div className={styles.top}>
                <Link to={"/board/"+this.state.board_id}><iconify-icon icon="ep:arrow-left"/></Link>
                    <div className={styles.text}>{getBName(this.state.board_id)}</div>
                </div>
                <PostEdit type="create" postId={this.state.board_id}/>
            </div>
        );
    }
}

export default Controller;