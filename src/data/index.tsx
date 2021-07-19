import axios from 'axios';

const url = 'https://api.jikan.moe/v3';

export const apiData = async (name: string) => {
    try {
        const {
            data: { results },
        } = await axios.get(`${url}/search/anime?q=${name}`);

        return results;
    } catch (error) {
        console.log(error);
    }
};

export const apiDataTop = async () => {
    try {
        const {
            data: { top },
        } = await axios.get(`${url}/top/anime`);

        return top;
    } catch (error) {
        console.log(error);
    }
};

export const apiDataUpcoming = async () => {
    try {
        const {
            data: { top },
        } = await axios.get(`${url}/top/anime/1/upcoming`);

        return top;
    } catch (error) {
        console.log(error);
    }
};

export const apiDataDay = async () => {
    try {
        var days = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ];
        var date = new Date();
        var dayName = days[date.getDay()];

        const {
            data: { [dayName]: day },
        } = await axios.get(`${url}/schedule/${dayName}`);

        return day;
    } catch (error) {
        console.log(error);
    }
};

export const apiDataGenres = async (genreID: number) => {
    try {
        const {
            data: { anime },
        } = await axios.get(`${url}/genre/anime/${genreID}`);
        return anime;
    } catch (error) {
        console.log(error);
    }
};

export const genres = [
    'Action',
    'Adventure',
    'Cars',
    'Comedy',
    'Dementia',
    'Demons',
    'Mystery',
    'Drama',
    'Ecchi',
    'Fantasy',
    'Game',
    'Hentai',
    'Historical',
    'Horror', // 14
    'Kids',
    'Magic',
    'Martial Arts', //17
    'Mecha',
    'Music',
    'Parody',
    'Samurai',
    'Romance',
    'School', //23
    'Sci-Fi',
    'Shoujo',
    'Shoujo Ai',
    'Shounen',
    'Shounen Ai',
    'Space',
    'Sports',
    'Super Power', //31
    'Vampire',
    'Yaoi',
    'Yuri', //34
    'Harem',
    'Slice of Life',
    'Supernatural',
    'Military',
    'Police',
    'Psychological',
    'Thriller',
    'Seinen',
    'Josei',
];

export const apiDataUpcomingAll = async () => {
    try {
        const {
            data: { anime },
        } = await axios.get(`${url}/season/later`);
        return anime;
    } catch (error) {
        console.log(error);
    }
};

export const apiDataSeasonArchive = async () => {
    try {
        const {
            data: { archive },
        } = await axios.get(`${url}/season/archive`);
        return archive;
    } catch (error) {
        console.log(error);
    }
};

export const apiDataYearSeason = async (year: number, season: string) => {
    try {
        const {
            data: { anime },
        } = await axios.get(`${url}/season/${year}/${season}`);
        return anime;
    } catch (error) {
        console.log(error);
    }
};
