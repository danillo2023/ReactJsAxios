import React from 'react'

export const NewPost = () => {
  return <div className='new-post'>
    <h2>Inserir novo post:</h2>
    <from>
      <div className="from-control">
        <label htmlFor="title">Título:</label>
        <input type=" text" 
            name='title'
            id='title'
            placeholder='Digite o titulo' />
        </div>
        <div className="from-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body"
            id="body"
            placeholder='Digite o conteúdo'>
            </textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn'/>
    </from>
  
  </div>;
};

export default NewPost;
