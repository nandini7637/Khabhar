
import { data } from './constants/data.js';
import news from './modal/news.js';

const DefaultData = async () => {
    try {
        await news.deleteMany({});
        await news.insertMany(data);
        console.log('Data imported');
    } catch (error) {
        console.log('Error', error.message);
    }
}

export default DefaultData;