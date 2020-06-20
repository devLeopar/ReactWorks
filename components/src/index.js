import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                Bunu yapmak istediğine emin misin ?
            </div>
        </ApprovalCard>


        <ApprovalCard>
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 5:45PM" 
            avatar={faker.image.avatar()} 
            comment={faker.lorem.sentence()} 
            />
        </ApprovalCard>


        <ApprovalCard>
          <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00AM" 
          avatar={faker.image.avatar()} 
          comment={faker.lorem.sentence()} 
          />
          </ApprovalCard>


          <ApprovalCard>
          <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 4:37PM" 
          avatar={faker.image.avatar()} 
          comment={faker.lorem.sentence()} 
          />
          </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />,document.querySelector('#root'));