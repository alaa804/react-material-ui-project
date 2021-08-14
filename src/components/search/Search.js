import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../image_results/ImagesResults';

const Search = () => {
    const [text , setText] = useState('');
    const [loading , setLoading]= useState(true);
    const [amount , setAmount] = useState(10);
    const [apiUrl] = useState('https://pixabay.com/api');
    const[apiKey] = useState('22893507-02d243d82672f52bec7f9ff13');
    const [images , setImages] = useState([]);


    useEffect(() => {
        const fetchImages = async () => {
           setLoading(true);
            const result = await axios.get(`${apiUrl}/?key=${apiKey}&q=${text}&image_type=photo&per_page=${amount}safesearch=true`)
             setImages(result.data.hits)
             setLoading(true);
            //  console.log(images);
        }
        fetchImages();
        // eslint-disable-next-line
    },[text])
   

    //SEARCH
     const onTextChange = async e => {
        if(e.target.value === '') {
           setImages([]);
        }else {
            setLoading(true);
            setText(e.target.value);
            const result = await axios.get(`${apiUrl}/?key=${apiKey}&q=${text}&image_type=photo&per_page=${amount}safesearch=true`)
            setImages(result.data.hits)
             setLoading(false);
        }
     }
     
    //  SEARCH BY AMOUNT
     const onAmountChange = (e ,index, value) => {
     setAmount(value);
    }

    return (
        <div>
          <TextField
            value={text}
            onChange={onTextChange}
            floatingLabelText='Search for Images...'
            fullWidth={true}
           /> 
           <br/> 
         <SelectField fullWidth={true}  floatingLabelText='amount...' value={amount} onChange={onAmountChange}>
         <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
          </SelectField>
          <br/>
          {images.length > 0 ? (<ImageResults images={images} loading={loading}/>) : null}
        </div>
    )
}

export default Search
