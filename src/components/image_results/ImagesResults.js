import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import { GridList , GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';




const ImagesResults = ({  images }) => {
  const [open , setOpen] = useState(false);
  const [currentImg , setCurrentImg] = useState('');
  
  const handleOpen = img => {
    setOpen(true);
    setCurrentImg(img);
  }

 const handleClose = () => {
    setOpen(false);
  }

  const actions = [
    <FlatButton label='close' primary={true} onClick={handleClose} />
  ];
    
    return (
        <GridList cols={3}>
        {
           images.map(img => (
          <GridTile
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton>
                <ZoomIn onClick={() => handleOpen(img.largeImageURL)} color="red" />
              </IconButton>
            }
          >
            <img src={img.largeImageURL} alt="" />
          </GridTile>
        ))}
           <Dialog
            style={{ borderRadius:'15px'}}
            actions={actions}
            model={false}
            open={open}
            onRequestClose={handleClose}>
              <img src={currentImg} alt='' style={{ width:'100%' , borderRadius:'15px' }} />
          </Dialog>
      </GridList>
    )
    
    
}

ImagesResults.propTypes = {
  images : PropTypes.array.isRequired,
  loading : PropTypes.bool
}

export default ImagesResults
