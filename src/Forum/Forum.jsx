import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell } from 'react-md';
import { Button } from 'react-md';
import './Forum.scss'
import ThreadCard from './ThreadCard'
const RenderActiveThread = (threads) => {
  const activeThread = threads.find((el) => el.isAsked)
  return (
    <div>
      {
        activeThread && <ThreadCard
          threadId={activeThread.id}
          question={activeThread.question}
          time={activeThread.time}
          description={activeThread.description}
          comments={activeThread.comments}
          tagNames={activeThread.tagNames}
          numberLikes={activeThread.numberLikes}
        />
      }
    </div>


  )
}
const Forum = ({
  threads,
}) => (
    <div className="forum">
      <Grid>
        <Cell size={12}>
          <Grid>
            <Cell size={12}>
              {/* {threads.map(
                (el, index) => (
                  <ThreadCard
                    key={index}
                    threadId={el.id}
                    question={el.question}
                    time={el.time}
                    description={el.description}
                    comments={el.comments}
                    tagNames={el.tagNames}
                    numberLikes={el.numberLikes}
                  />

                ),
              )} */}

              {RenderActiveThread(threads)}
            </Cell>
          </Grid>

          <Grid>
            {threads.map(
              (el) => (
                <Cell size={6}>
                  <div>
                    <ThreadCard
                      threadId={el.id}
                      question={el.question}
                      time={el.time}
                      description={el.description}
                      comments={el.comments}
                      hasTime={false}
                      hasTags={false}
                      hasHead={false}
                    />
                  </div>
                </Cell>
              ),
            )}
          </Grid>

          <div className="buttons">
            <Button color="white" backgroundColor="#2a4bd8" className="btnPost"> + Post a thread </Button>
          </div>
        </Cell>
      </Grid>
    </div>

  )

Forum.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default Forum
