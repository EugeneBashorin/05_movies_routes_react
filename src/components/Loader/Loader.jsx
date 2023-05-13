import {Puff} from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
    return(
        <Wrapper>
            <Puff
                height="80"
                width="80"
                radius={1}
                color="gold"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </Wrapper>
    )
}

export default Loader;