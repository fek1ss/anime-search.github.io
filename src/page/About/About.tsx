import React from 'react';
import styles from './styles.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>About Anime Search</h1>
            <p className={styles.description}>
                Welcome to Anime Search! This website allows you to search for
                your favorite anime, add them to your favorites list, and read a
                brief description about each one.
            </p>
            <p className={styles.featuresTitle}>Key Features:</p>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <h3>Search Anime</h3>
                    <p>
                        Find your favorite anime by title and explore detailed
                        information about it.
                    </p>
                </div>
                <div className={styles.feature}>
                    <h3>Add to Favorites</h3>
                    <p>
                        Manage your favorite anime by adding them to your
                        personal list for quick access.
                    </p>
                </div>
                <div className={styles.feature}>
                    <h3>Read Brief Description</h3>
                    <p>
                        View short descriptions of anime to get a quick overview
                        of the plot and characters.
                    </p>
                </div>
            </div>
            <p className={styles.apiInfo}>
                This website uses the Jikan API to fetch anime data. Jikan is an
                unofficial API for MyAnimeList, providing detailed information
                about anime, manga, and related data.
            </p>
        </div>
    );
};

export default About;
