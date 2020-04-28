import { Link } from 'react-router-dom';
import * as React from "react";

interface propTypes {
  mods: object,
  id: string,
  title: string,
  branch: string,
  hash: string,
  author: string,
  url?: string,
  datetime: string,
  duration: string,
}

const CommitCard:React.FC<propTypes> = (props) => {
  const {
    id, title, branch, hash, author, url, datetime, duration,
  } = props;

  return (
    <article
      className={b('commit-card', props)}
    >
      <div className={b('commit-card__content')}>
        <div className={b('commit-card__header')}>
          <span className={b('commit-card__id')}>{`#${id}`}</span>
          <h2 className={b('commit-card__title')}>
            {url ? (
              <Link
                className={b('commit-card__link')}
                to={url}
              >
                {title}
              </Link>
            ) : title }
          </h2>
        </div>
        <p className={b('commit-card__details')}>
          <span className={b('commit-card__hidden-note')}>Целевая ветка слияния</span>
          <span className={b('commit-card__branch')}>{branch}</span>
          <span className={b('commit-card__hidden-note')}>Хеш коммита</span>
          <span className={b('commit-card__hash')}>{hash}</span>
          <span className={b('commit-card__hidden-note')}>Автор коммита</span>
          <span className={b('commit-card__author')}>{author}</span>
        </p>
        {(datetime || duration) && (
          <p className={b('commit-card__meta')}>
            {datetime && (
              <>
                <span className={b('commit-card__hidden-note')}>Время и дата начала сборки билда</span>
                <span className={b('commit-card__datetime')}>{datetime}</span>
              </>
            )}
            {duration && duration.toString() && (
              <>
                <span className={b('commit-card__hidden-note')}>Длительность сборки билда</span>
                <span className={b('commit-card__duration')}>{duration}</span>
              </>
            )}
          </p>
        )}
      </div>
    </article>
  );
};

export default CommitCard;
