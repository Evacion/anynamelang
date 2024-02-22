import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia,
    Grid,
    Typography 
} from '@mui/material';
import { 
    useState, 
    // setState 
} from 'react';
// import App from '../App';

function ServantCard({ id=0, image="", name="", category="", callback=null }) {
    // const [id, setId] = useState("");
    // const [name, setName] = useState("");
    // const [image, setImage] = useState("");
    // const [category, setCategory] = useState("");
    // const [price, setPrice] = useState("");
    // const [currQuantity, setQuantity] = useState(0);
    // const subQuantity = () => { 
    //     if(!currQuantity-1 < 0) {
    //         setQuantity(parseInt(currQuantity)-1);
    //         callback("sub", {
    //             "ID": id,
    //             "Name": name,
    //             "Price": price,
    //             "Quantity": 1
    //         });
    //     }
    // }
    // const addQuantity = () => { 
    //     setQuantity(parseInt(currQuantity)+1);
    //     callback("add", {
    //         "ID": id,
    //         "Name": name,
    //         "Price": price,
    //         "Quantity": 1
    //     });
    // }
    return (
        <Grid item  key={id}>
            <br></br>
            <Card>
                <CardMedia sx={{height: 150, width: 300}} image={image} title={name}/>
                <CardHeader title={name} subheader={category}/>
                {/* <CardContent> */}
                    {/* <Typography variant="body2" color="text.secondary">Quantity: {currQuantity}</Typography> */}
                {/* </CardContent> */}
                {/* <CardActions> */}
                {/* </CardActions> */}
            </Card>
        </Grid>
    );
}

export default ServantCard;