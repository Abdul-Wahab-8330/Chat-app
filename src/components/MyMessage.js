import React from 'react'

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return <img src={message.attachments[0].file} alt="message-attachment" className='message-image' style={{ float: 'right' }} />
  }
  const stripHtmlTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div className='message' style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message?.text ? stripHtmlTags(message.text) : 'No text available'}     </div>
  )
}

export default MyMessage
