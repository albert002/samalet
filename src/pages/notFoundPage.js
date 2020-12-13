import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFoundPage() {
  return (
    <section>
        <p>404</p>
        <p>
            Что-то пошло не так!
            <br />
            Вернутся{' '}
            <Link to="/" onClick={() => setTimeout(() => window.location.reload())}>
                на главную
            </Link>
            .
        </p>
    </section>
  );
}
