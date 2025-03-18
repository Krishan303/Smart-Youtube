import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
    const comments = [{
        name: "Krishan Pandey",
        comment: "This is the best comment you have seen",
        replies: [
            {
                name: "Krishan Pandey",
                comment: "This is the best comment you have seen",
                replies: [
                    {
                        name: "Krishan Pandey",
                        comment: "This is the best comment you have seen",
                        replies: [
                            {
                                name: "Krishan Pandey",
                                comment: "This is the best comment you have seen",
                                replies: [
                                    {
                                        name: "Krishan Pandey",
                                        comment: "This is the best comment you have seen",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Krishan Pandey",
        comment: "This is the best comment you have seen",
        replies: []
    },
    {
        name: "Krishan Pandey",
        comment: "This is the best comment you have seen",
        replies: []
    }
]
  return (
    <div>
    <div className='font-bold my-2'>Comments: </div>
    <Comment data = {comments[0]}/>
    </div>
  )
}

export default CommentsContainer