import React from 'react'
import PropTypes from 'prop-types'
import './ThreadCard.scss'
import { Grid, Cell } from 'react-md';
import moment from 'moment'
import HashTag from './hashtag'


const ThreadCard = ({
  comments,
  question,
  time,
  description,
  hasFooter,
  tagNames,
  hasTags,
  hasTime,
  hasHead,
  numberLikes,
}) => (
    <Grid className="thread-card">
      {hasHead
        && (
          <Cell size={1} style={{ margin: '0px' }}>
            <div className="thread-header">
              <span>
                <i className="far fa-thumbs-up fa-2x" />
                <div>({numberLikes})</div>
              </span>

            </div>

          </Cell>

        )}
      <Cell size={hasHead ? 11 : 12} className="thread-content">
        <div className="body">
          <div className="thread-body">
            <span className="question">
              {question}
            </span>
            {hasTime
              && <span className="time">. Asked {moment(time).fromNow()}</span>
            }
            <p>{description}</p>
          </div>
        </div>

        {hasFooter && (
          <div className="footer">

            <div className="thread-footer">
              <div className="space">
                <div className="comments">
                  <i className="material-icons"> comment</i>
                  <span style={{ paddingLeft: '5px' }}>({comments})  </span>
                </div>
                {hasTags && (
                  <div className="btn">
                    {tagNames.map((el, index) => (
                      <div key={index} className="button">
                        <HashTag>{el}</HashTag>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
            <div />
          </div>
        )}

      </Cell>
    </Grid>
  );

ThreadCard.propTypes = {

  question: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tagNames: PropTypes.string.isRequired,
  numberLikes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  hasFooter: PropTypes.bool,
  hasTags: PropTypes.bool,
  hasTime: PropTypes.bool,
  hasHead: PropTypes.bool,

};

ThreadCard.defaultProps = {
  hasFooter: true,
  hasTags: true,
  hasTime: true,
  hasHead: true,

};
export default ThreadCard
